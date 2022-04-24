/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

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
        e.children.length === 0 ? { ...e, disabled: true } : e,
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
