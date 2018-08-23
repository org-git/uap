import i18n from '@/locales'

export default {
  path: '*',
  name: 'error',
  component: resolve => require(['@/views/error/404'], resolve),
  meta: {
    title: i18n.t('error.title')
  }
}
