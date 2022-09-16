// 封装axios
import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from './ls'

// 实例化
const instance = axios.create({
  // 自动拼接到接口 path 的前面
  baseURL: 'http://geek.itheima.net',
  // 超时, 本次请求将会取消, 释放请求资源
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // Do something before request is sent
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  // Do something before response is sent

  return response.data
}, error => {
  // Do something with response error
  // console.log('拦截器', error)
  Toast.fail(error.response.data.message)
  return Promise.reject(error)
})

export default instance
