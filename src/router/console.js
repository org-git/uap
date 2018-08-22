import i18n from '@/locales'

export default {
  path: '/console',
  name: 'console',
  redirect: 'console/dashboard',
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
      auth: true
    }
  }, {
    path: 'profile',
    name: 'console-profile',
    component: resolve => require(['@/views/console/profile'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    }
  }, {
    path: 'website',
    name: 'console-website',
    redirect: 'website/list',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'list',
      name: 'console-website',
      component: resolve => require(['@/views/console/website/list'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }, {
      path: 'edit/:id',
      name: 'console-website-edit',
      component: resolve => require(['@/views/console/website/edit'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }, {
      path: 'website/setting',
      name: 'console-website-setting',
      component: resolve => require(['@/views/console/website/setting'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }, {
    path: 'user',
    name: 'console-user',
    redirect: 'user/list',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'list',
      name: 'console-user-list',
      component: resolve => require(['@/views/console/user/list'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }, {
    path: 'role',
    name: 'console-role',
    redirect: 'role/list',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'list',
      name: 'console-role-list',
      component: resolve => require(['@/views/console/user/list'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }, {
    path: 'message',
    name: 'console-message',
    redirect: 'message/unread',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'unread',
      name: 'console-message-unread',
      component: resolve => require(['@/views/console/message/unread'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }, {
    path: 'configure',
    name: 'console-configure',
    redirect: 'configure/configure',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'configure',
      name: 'console-configure/configure',
      component: resolve => require(['@/views/console/setting/configure'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }, {
    path: 'log',
    name: 'console-log',
    redirect: 'log/list',
    component: resolve => require(['@/views/layout'], resolve),
    meta: {
      title: i18n.t('console.title'),
      auth: true
    },
    children: [{
      path: 'list',
      name: 'console-log-list',
      component: resolve => require(['@/views/console/log/list'], resolve),
      meta: {
        title: i18n.t('console.title'),
        auth: true
      }
    }]
  }]
};
