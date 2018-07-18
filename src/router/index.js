import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import Login from '@/views/home/Login'
import Console from '@/views/console/Console'
import Admin from '@/views/admin/Admin'
import NotFound from '@/views/error/NotFound'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/console',
      name: 'console',
      component: Console,
      meta: {
        title: '控制台'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: '后台管理中心'
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
      meta: {
        title: '错误'
      }
    }
  ]
})
