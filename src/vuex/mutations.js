import * as types from './types'
import marked from 'marked'
const mutations = {
  [types.SUCCESS_GET_USER_INFO] (state, payload) {
    payload.loaded = true
    state.userInfo = payload
  },
  [types.SUCCESS_GET_ISSUES] (state, payload) {
    payload.forEach(i => {
      i.htmlBody = marked(i.body)
      i.plainBody = i.htmlBody.replace(/<\/?[^>]+(>|$)/g, '')
      state.issues.push(i)
    })
    state.issues.loaded = true
  }
}

export default mutations
