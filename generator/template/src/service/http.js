import axios from 'axios'
import config from '@/config'
import Toasted from 'vue-toasted'

console.warn(`运行环境：${process.env.API_ENV}，api：${config.BASE_URL}， H5版本号：${process.env.H5_VERSION}`)

const isMock = config.BASE_URL.indexOf('mockjs') > -1
const Intance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 10000,
})

Intance.interceptors.request.use((requestConfig) => {
  // 非mock 添加请求头规则
  /* eslint no-param-reassign: "error" */
  if (!isMock) {
    requestConfig.headers.common['X-TOKEN'] = 'token'
  }
  return requestConfig
}, err => Promise.reject(err))

// 返回拦截规则 自定义
Intance.interceptors.response.use((response) => {
  console.log(response)
  return response
}, (err) => {
  Toasted.show('服务器出错，请稍候~')
  return Promise.reject(err)
})
// export axios
export default Intance
