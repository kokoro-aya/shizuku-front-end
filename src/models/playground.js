import request from "umi-request";
import {count, pack} from "@/fragments/Utils";
import * as playgroundService from '../services/playground';
import {message} from 'antd';

const delay = (millisecond) => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond)
  })
}

export default {
  namespace: 'playground',
  state: {
    answer: [],
    nextFrame: {
      grid: {
        grid: [
          ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
          ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
          ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
          ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
          ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
        ],
        layout: [
          ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE'],
          ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE'],
          ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE'],
          ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE'],
          ['NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE', 'NONE'],
        ],
        layout2s: [
          [{color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}],
          [{color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}],
          [{color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}],
          [{color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}],
          [{color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}, {color: "WHITE", level: 2},
            {color: "WHITE", level: 2}, {color: "WHITE", level: 2}],
        ]
      },
      players: [{
        id: 0,
        x: 0,
        y: 0,
        dir: "RIGHT",
        role: "SPECIALIST",
      }],
      portals: [],
      locks: [],
      output: '',
      initialGem: 0,
      special: '',
    },
    initialized: 'false',
    currentLength: 0,
    answerLength: 1,
    returnedError: null,
  },
  effects: {
    *handleSubmit({ payload }, sagaEffects) {
      // console.log(payload)
      const { call, put } = sagaEffects
      try {
        const packed = pack(payload.code, payload.grid, payload.portals, payload.locks, payload.players)
        const answer = yield call(playgroundService.submit, packed)
        console.log(answer)
        if (answer.status === 'OK') {
          message.warn('代码提交成功！')
          yield put({type: 'loadPlayground', payload: answer.payload})
        } else {
          message.error(answer.msg)
          yield put({type: 'returnError',})
        }
      } catch (e) {
        message.error('无法连接到远端服务器')
        yield put({type: 'returnError',})
      }
    },
    *initialFetch({payload}, sagaEffects) {
      // console.log('initializing')
      const endPointURI = '/dev/playground/fetch'
      const { call, put } = sagaEffects
      try {
        const playground = yield call(request, endPointURI)
        yield put({type: 'initialize', payload: playground})
      } catch (e) {
        message.error('数据获取失败')
        yield put({type: 'returnError',})
      }
    },
  },
  reducers: {
    initialize(state, { payload }) {
      // console.log('initialized')
      // console.log(state.initialized)
      return {
        answer: [],
        nextFrame: {
          grid: payload.grid,
          players: payload.players,
          portals: payload.portals,
          locks: payload.locks,
          output: '',
          initialGem: count(payload.grid.layout, 'GEM'),
          special: '',
        },
        initialized: 'true',
        currentLength: 0,
        answerLength: 1,
        returnedError: false,
      }
    },
    loadPlayground(state, { payload }) {
      return {
        ...state, answer: payload, answerLength: payload.length, returnedError: false,
      }
    },
    nextFrame(state, { payload }) {
      if (state.answer.length !== 0) {
        const answer = state.answer
        const initialGem = state.nextFrame.initialGem
        const nextFrame = answer.shift()
        // console.log(nextFrame)
        return {
          answer: answer,
          nextFrame: {
            grid: nextFrame.grid,
            players: nextFrame.players,
            portals: nextFrame.portals,
            locks: nextFrame.locks,
            output: nextFrame.consoleLog,
            initialGem: initialGem,
            special: nextFrame.special,
          },
          initialized: 'true',
          currentLength: state.currentLength + 1,
          answerLength: state.answerLength,
        }
      } else {
        return state
      }
    },
    returnError(state, { payload }) {
      return {
        ...state, returnedError: true,
      }
    }
  }
}
