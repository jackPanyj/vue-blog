import * as types from './types'

const mutations = {
  [types.SUCCESS_GET_USER_INFO] (state, payload) {
    state.userInfo = payload
  },
  [types.SUCCESS_GET_ISSUES] (state, payload) {
    state.issues.push(...payload)
  }
}

export default mutations
