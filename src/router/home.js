import i18n from '@/locales'

export default {
  path: '/',
  name: 'home',
  component: resolve => require(['@/views/home/layout'], resolve),
  meta: {
    title: i18n.t('title')
  },
  children: [{
    path: 'login',
    name: 'login',
    component: resolve => require(['@/views/home/login'], resolve),
    meta: {
      title: i18n.t('login.title')
    }
  }, {
    path: 'register',
    name: 'register',
    component: resolve => require(['@/views/home/register'], resolve),
    meta: {
      title: i18n.t('register.title')
    }
  },{
    path: 'websites',
    name: 'websites',
    redirect: '/',
    component: resolve => require(['@/views/home/website'], resolve),
    meta: {
      title: i18n.t('home.website.title'),
      auth: true
    }
  }]
}
