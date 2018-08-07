import i18n from '@/locales'

export default {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/dashboard',
    component: resolve => require(['@/views/admin/layout'], resolve),
    meta: {
      title: i18n.t('admin.title'),
      // auth: true
    },
    children: [{
      path: 'dashboard',
      name: 'admin-dashboard',
      component: resolve => require(['@/views/admin/dashboard'], resolve),
      meta: {
        title: i18n.t('admin.title'),
        // auth: true
      }
    }]
}