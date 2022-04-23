import { ErrorState } from '@/models/playground.types';
import { Effect, ImmerReducer } from 'umi';
import { MapCategory, MapSelectStates } from '@/models/mapselect.types';
import request from 'umi-request';
import { message } from 'antd';

export interface MapSelectInterface {
  namespace: 'mapselect';
  state: MapSelectStates;
  effects: {
    fetch: Effect;
  };
  reducers: {
    initialize: ImmerReducer<MapSelectStates>;
    returnError: ImmerReducer<ErrorState>;
  };
}

const model: MapSelectInterface = {
  namespace: 'mapselect',
  state: {
    maps: [],
    current: undefined,
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const endPointURI = '/dev/playground/fetch';
      try {
        const value = yield call(request, endPointURI);
        // console.log('value: ' + value);
        yield put({ type: 'initialize', payload: value });
      } catch (e) {
        message.error('地图列表获取失败');
        yield put({ type: 'returnError' });
      }
    },
  },
  reducers: {
    initialize(state, { payload }) {
      const options = (payload as Array<MapCategory>).map((e) =>
        e.children.length === 0
          ? {
              label: e.label,
              value: e.value,
              children: e.children,
              disabled: true,
            }
          : e,
      );
      const nextState: MapSelectStates = {
        maps: options,
      };
      return nextState;
    },
    returnError(state, { payload }) {
      return {
        returnedError: true,
      };
    },
  },
};

export default model;
