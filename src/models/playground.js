import request from "umi-request";
import {count} from "@/fragments/Utils";
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
      grid: [
        ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
        ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
        ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
        ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
        ['OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN', 'OPEN'],
      ],
      player: {},
      output: '',
      initialGem: 0,
    },
    initialized: 'false',
    currentLength: 0,
    answerLength: 1,
  },
  effects: {
    *handleSubmit({ payload }, sagaEffects) {
      // console.log(payload)
      const { call, put } = sagaEffects
      try {
        const answer = yield call(playgroundService.submit, payload)
        console.log(answer)
        if (answer.status === 'OK') {
          message.warn('代码提交成功！')
          yield put({type: 'loadPlayground', payload: answer.payload})
        } else {
          message.error(answer.msg)
        }
      } catch (e) {
        message.error('无法连接到远端服务器')
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
          player: payload.player,
          output: '',
          initialGem: count(payload.grid, 'GEM')
        },
        initialized: 'true',
        currentLength: 0,
        answerLength: 1,
      }
    },
    loadPlayground(state, { payload }) {
      return {
        ...state, answer: payload, answerLength: payload.length
      }
    },
    nextFrame(state, { payload }) {
      if (state.answer.length !== 0) {
        const answer = state.answer
        const initialGem = state.nextFrame.initialGem
        const nextFrame = answer.shift()
        console.log(nextFrame)
        return {
          answer: answer,
          nextFrame: {
            grid: nextFrame.grid.grid,
            player: nextFrame.player,
            output: nextFrame.consoleLog,
            initialGem: initialGem,
          },
          initialized: 'true',
          currentLength: state.currentLength + 1,
          answerLength: state.answerLength,
        }
      } else {
        return state
      }
    }
  }
}
