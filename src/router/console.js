import i18n from '@/locales'

export default {
  path: '/console',
  name: 'console',
  redirect: '/console/dashboard',
  component: resolve => require(['@/views/console/layout'], resolve),
  meta: {
    title: i18n.t('console.title'),
    auth: true
  },
  children: [{
    path: 'dashboard',
    name: 'console-dashboard',
    component: resolve => require(['@/views/console/dashboard'], resolve),
    meta: {
      title: i18n.t('console.title'),
      // auth: true
    }
  }, {
    path: 'profile',
    name: 'console-profile',
    component: resolve => require(['@/views/console/profile'], resolve),
    meta: {
      title: i18n.t('console.title'),
      // auth: true
    }
  }]
};
