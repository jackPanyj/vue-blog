import Axios from 'axios'

const Ax = Axios.create({
  baseURL: 'https://api.github.com'
})

Ax.interceptors.request.use(config => {
  if (config.url.includes('issues')) {
    return Object.assign(config, {params: new URLSearchParams('per_page=8')})
  }
  return config
})

Ax.interceptors.response.use(res => {
  if (res.status === 200) return res.data
})

export const owner = 'jackpanyj'
export const repos = 'learning-note'
export default Ax
