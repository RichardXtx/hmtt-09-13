import Vue from 'vue'
import VueRouter from 'vue-router'
// 不是按需导入 所有路由资源都会参与打包
// 打包优化 =》 改为import形式 按需加载
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Detail from '@/views/Detail'
import EditUser from '@/views/My/edit'

import My from '@/views/My'
import Home from '@/views/Home'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'my',
        component: My
      },
      {
        path: '',
        component: Home
      },
      {
        path: 'search',
        component: Search
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/editUser',
    component: EditUser
  }
]

const router = new VueRouter({
  routes
})

export default router
