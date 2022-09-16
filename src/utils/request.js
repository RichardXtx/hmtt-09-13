// 封装axios
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from './ls'

// 实例化
const instance = axios.create({
  // 自动拼接到接口 path 的前面
  baseURL: 'http://toutiao.itheima.net',
  // baseURL: 'http://geek.itheima.net',
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
  console.dir(error)
  if (error.response.status === 401) {
    store.commit('clearToken')

    router.push({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  }
  Toast.fail(error.response.data.message)
  return Promise.reject(error)
})

export default instance
