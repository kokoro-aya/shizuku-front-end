import request from "umi-request";
import { count } from "@/fragments/Utils";

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
        ['OPEN'],
      ],
      player: {},
      output: '',
      initialGem: 0,
    }
  },
  effects: {
    handleSubmit(state, sagaEffects) {
      console.log(state)
      console.log(content)
      // TODO complete the logic
    },
    *initialFetch(state, sagaEffects) {
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
      return {
        answer: [],
        nextFrame: {
          grid: payload.grid,
          player: payload.player,
          output: '',
          initialGem: count(payload.grid, 'GEM')
        }
      }
    },
    nextFrame(state, { payload }) {
      if (state.answer.length !== 0) {
        const answer = state.answer
        const initialGem = state.nextFrame.initialGem
        const nextFrame = answer.shift()
        return {
          answer: answer,
          nextFrame: {
            grid: nextFrame.grid,
            player: nextFrame.player,
            output: nextFrame.consoleLog,
            initialGem: initialGem,
          }
        }
      }
    }
  }
}
