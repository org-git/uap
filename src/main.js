// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

import i18n from '@/locales'
import store from '@/store'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/plugins/iconfont/iconfont.css'
import '@/assets/css/style.css'

import Header from '@/components/header/header'
import Navbar from '@/components/navbar/navbar'
import NavItem from '@/components/navbar/navitem'
import Footer from '@/components/footer/footer'
import LoginStatus from '@/components/navbar/loginstatus'
import Toolbar from '@/components/navbar/toolbar'
import Lang from '@/components/navbar/lang'
import Pagination from "@/components/pagination";

Vue.use(VueResource);
Vue.use(ElementUI)

Vue.config.productionTip = false;

require('@/mock/mock')

Vue.component('u-header', Header);
Vue.component('u-navbar', Navbar);
Vue.component('nav-item', NavItem);
Vue.component('u-footer', Footer);
Vue.component('u-login-status', LoginStatus);
Vue.component('u-toolbar', Toolbar);
Vue.component('u-lang', Lang);
Vue.component('u-pagination', Pagination);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.auth) { // 判断该路由是否需要登录权限
    if (store.getters.authenticated) {
      next()
      return;
    }
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
