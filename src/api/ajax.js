/**
 * 能发送异步ajax函数请求的模块
 * 封装axios库
 */
import axios from 'axios'

export default function ajax() {

  // 创建axios实例
  const request = axios.create({
    baseURL: 'https://scrm-api-cs.cloud.kemai.cn',
    timeout: 5000
  })
  
  // 请求拦截器
  request.interceptors.request.use(
    config => {
      config.headers['token'] = getToken('')
      return config
    },
    error => Promise.reject(error)
  )
}
