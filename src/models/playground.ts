import request from 'umi-request';
import * as playgroundService from '../services/playground';
import { message } from 'antd';
import { ErrorState, ModelStates } from '@/models/playground.types';
import { Effect, ImmerReducer } from 'umi';
import { InitStates } from '../../mock/playground';
import { SuccessData } from '@/data/ReceivedData';
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
    loadPlayground: ImmerReducer<ModelStates>;
    nextFrame: ImmerReducer<ModelStates>;
    returnError: ImmerReducer<ErrorState>;
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
        const answer = yield call(playgroundService.submit, payload);
        // console.log(answer)
        if (answer.status === 'OK') {
          message.warn('代码提交成功！');
          console.log(answer);
          yield put({ type: 'loadPlayground', payload: answer });
        } else {
          message.error(answer.msg);
          yield put({ type: 'returnError' });
        }
      } catch (e) {
        message.error('无法连接到远端服务器');
        yield put({ type: 'returnError' });
      }
    },
    *initialFetch({ payload }, { call, put }) {
      // console.log('initializing')
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
      // TODO add fetch logics
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
        answerLength: payload.length,
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
      return {
        returnedError: true,
      };
    },
  },
};

export default model;
