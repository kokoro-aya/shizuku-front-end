/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import request from 'umi-request';
import * as playgroundService from '../services/playground';
import { message } from 'antd';
import { ModelStates } from '@/models/playground.types';
import { Effect, ImmerReducer } from 'umi';
import { InitStates } from '../../mock/utils';
import { ReceivedData, SuccessData } from '@/data/ReceivedData';
import { constructFrame } from '@/Utils';
import { GameStatus } from '@/data/Enums';
import { initialState } from '@/models/initialstuff';

export interface PlaygroundModelInterface {
  namespace: 'playground';
  state: ModelStates;
  effects: {
    handleSubmit: Effect;
    initialFetch: Effect;
    fetchMap: Effect;
  };
  reducers: {
    initialize: ImmerReducer<ModelStates>;
    setMap: ImmerReducer<ModelStates>;
    loadPlayground: ImmerReducer<ModelStates>;
    nextFrame: ImmerReducer<ModelStates>;
    returnError: ImmerReducer<ModelStates>;
  };
}

const model: PlaygroundModelInterface = {
  namespace: 'playground',
  state: {
    ...initialState,
  },
  effects: {
    *handleSubmit({ payload }, { call, put }) {
      // console.log(payload)
      try {
        const a_ = yield call(playgroundService.submit, payload);
        const answer = a_ as ReceivedData;
        if (answer.status === 'OK') {
          message.warn('代码提交成功！');
          yield put({ type: 'loadPlayground', payload: answer });
        } else {
          yield put({ type: 'returnError', payload: { message: answer.msg } });
        }
      } catch (e) {
        message.error('无法连接到远端服务器');
        yield put({ type: 'returnError' });
      }
    },
    *initialFetch({ payload }, { call, put }) {
      const endPointURI = '/dev/playground/fetch/default';
      try {
        const playground = yield call(request, endPointURI);
        yield put({ type: 'initialize', payload: playground });
      } catch (e) {
        message.error('数据获取失败');
        yield put({ type: 'returnError' });
      }
    },
    *fetchMap({ payload }, { call, put }) {
      const endPointURI = `/dev/playground/fetch/${payload}`;
      try {
        const playground = yield call(request, endPointURI);
        yield put({ type: 'initialize', payload: playground });
      } catch (e) {
        message.error('数据获取失败');
        yield put({ type: 'returnError' });
      }
    },
  },
  reducers: {
    initialize(state, { payload }) {
      // console.log('initialized')
      // console.log(state.initialized)
      const _p = payload as InitStates;
      const nextState: ModelStates = {
        answer: [],
        nextFrame: {
          grid: _p.grid,
          stairs: _p.stairs,
          gems: _p.gems,
          beepers: _p.beepers,
          switches: _p.switches,
          portals: _p.portals,
          monsters: _p.monsters,
          locks: _p.locks,
          platforms: _p.platforms,
          players: _p.players,
          output: '',
          special: '',
        },
        initialized: true,
        initialGem: _p.gems.length,
        currentLength: 0,
        answerLength: 1,
        returnedError: false,
        gamingCondition: _p.gamingCondition,
        userCollision: _p.userCollision,
        gameStatus: GameStatus.PENDING,
        gained: 0,
        currentMap: state.currentMap,
      };
      return nextState;
    },
    setMap(state, { payload }) {
      const nextState: ModelStates = {
        ...state,
        currentMap: payload,
      };
      return nextState;
    },
    loadPlayground(state, { payload }) {
      const data = payload as SuccessData;

      const nextState: ModelStates = {
        ...state,
        answer: data.payload.map((p) =>
          constructFrame(p, state.nextFrame.grid, state.nextFrame.stairs),
        ),
        answerLength: data.payload.length,
        returnedError: false,
        gameStatus: data.game,
        gained: data.gained,
      };
      return nextState;
    },
    nextFrame(state, { payload }) {
      const { answer, nextFrame, currentLength, ...values } = state;
      const newFrame = answer.shift();
      if (newFrame !== undefined) {
        // console.log(nextFrame)
        const nextState: ModelStates = {
          ...values,
          answer: answer,
          nextFrame: { ...newFrame },
          currentLength: currentLength + 1,
        };
        return nextState;
      } else {
        return state;
      }
    },
    returnError(state, { payload }) {
      // console.log(payload)
      const nextState: ModelStates = {
        ...state,
        nextFrame: { ...state.nextFrame, output: payload.message ?? '' },
        returnedError: true,
      };
      return nextState;
    },
  },
};

export default model;
