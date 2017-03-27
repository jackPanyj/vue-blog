import * as types from './types'
import Ax, {owner, repos} from 'tools/Ax'

const actions = {
  getUserInfo ({commit}) {
    Ax.get(`/users/${owner}`).then(data => commit(types.SUCCESS_GET_USER_INFO, data))
  },
  getIssues ({commit}, params) {
    console.log(params)
    Ax.get(`/repos/${owner}/${repos}/issues?page=${params && params.page}`, {params: {id: 123}}).then(data => commit(types.SUCCESS_GET_ISSUES, data))
  }
}

export default actions
