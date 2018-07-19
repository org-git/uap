import Vue from 'vue'
import Router from 'vue-router'

import i18n from '@/locales'

import Home from '@/views/home/Home'
import Project from '@/views/home/Project'
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
        title: i18n.t('title')
      },
      children: [
        {
          path: '/projects',
          name: 'projects',
          component: Project,
          meta: {
            title: i18n.t('home.project.title')
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: i18n.t('home.login.title')
      }
    },
    {
      path: '/console',
      name: 'console',
      component: Console,
      meta: {
        title: i18n.t('console.title')
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: i18n.t('admin.title')
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
      meta: {
        title: i18n.t('error.title')
      }
    }
  ]
})
