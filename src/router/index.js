import Vue from 'vue'
import Router from 'vue-router'

import i18n from '@/locales'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/home/Home'], resolve),
      redirect: '/projects',
      meta: {
        title: i18n.t('title')
      },
      children: [{
        path: '/projects',
        name: 'projects',
        component: resolve => require(['@/views/home/Project'], resolve),
        meta: {
          title: i18n.t('home.project.title'),
          auth: true
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/home/Login'], resolve),
      meta: {
        title: i18n.t('home.login.title')
      }
    },
    {
      path: '/console',
      name: 'console',
      component: resolve => require(['@/views/console/Console'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: resolve => require(['@/views/admin/Admin'], resolve),
      meta: {
        title: i18n.t('admin.title'),
        auth: true
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: resolve => require(['@/views/error/NotFound'], resolve),
      meta: {
        title: i18n.t('error.title')
      }
    }
  ]
})
