import request from 'umi-request';
import * as playgroundService from '../services/playground';
import { message } from 'antd';
import { ErrorState, ModelStates } from '@/models/types';
import { Effect, ImmerReducer } from 'umi';
import { InitialState } from '@@/plugin-initial-state/exports';
import { InitStates } from '../../mock/playground';
import { SentData } from '@/data/SentData';
import { SuccessData } from '@/data/ReceivedData';

export interface PlaygroundModelInterface {
  namespace: 'playground';
  state: ModelStates;
  effects: {
    handleSubmit: Effect;
    initialFetch: Effect;
  };
  reducers: {
    initialize: ImmerReducer<ModelStates>;
    loadPlayground: ImmerReducer<ModelStates>;
    nextFrame: ImmerReducer<ModelStates>;
    returnError: ImmerReducer<ErrorState>;
  };
}

const initialState: ModelStates = {
  initialized: false,
  initialGem: 0,
  nextFrame: {
    grid: [
      [
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
      ],
      [
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
        {
          block: Block.BLOCKED,
          biome: Biome.PLAINS,
          color: Color.WHITE,
          level: 0,
        },
      ],
    ],
    gems: [],
    beepers: [],
    switches: [],
    portals: [],
    monsters: [],
    locks: [],
    platforms: [],
    players: [],
    stairs: [],
    output: '',
    special: '',
  },
  answer: [],
  currentLength: 0,
  answerLength: 1,
  returnedError: false,
  gamingCondition: undefined,
  userCollision: false,
};

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
          yield put({ type: 'loadPlayground', payload: answer.payload });
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
      const endPointURI = '/dev/playground/fetch';
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
      };
      return nextState;
    },
    loadPlayground(state, { payload }) {
      const _p = payload as SuccessData;
      // TODO fix this
      const nextState: ModelStates = {
        ...state,
        answer: payload,
        answerLength: payload.length,
        returnedError: false,
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
        ...state,
        returnedError: true,
      };
    },
  },
};

export default model;
