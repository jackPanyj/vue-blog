import * as types from './types'
import Ax, {owner, repos} from 'tools/Ax'

const actions = {
  getUserInfo ({commit}) {
    Ax.get(`/users/${owner}`).then(data => commit(types.SUCCESS_GET_USER_INFO, data))
  },
  getIssues ({commit}, params = {}) {
    Object.assign(params, {per_page: 8})
    Ax.get(`/repos/${owner}/${repos}/issues`, {params}).then(data => commit(types.SUCCESS_GET_ISSUES, data))
  }
}

export default actions
