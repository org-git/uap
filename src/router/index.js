import Vue from 'vue'
import Router from 'vue-router'

import Console from '@/views/console/Console'
import Admin from '@/views/admin/Admin'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
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
    }
  ]
})
