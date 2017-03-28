import Axios from 'axios'

const Ax = Axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'jackpanyj',
    password: ''
  }
})

Ax.interceptors.response.use(res => {
  if (res.status === 200) return res.data
})

export const owner = 'jackpanyj'
export const repos = 'learning-note'
export default Ax
