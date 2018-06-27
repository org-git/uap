// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/plugins/iconfont/iconfont.css'
import '@/assets/css/style.css'

import Header from '@/components/header/header'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component('u-header', Header);
Vue.component('u-navbar', Navbar);
Vue.component('u-footer', Footer);

router.beforeEach((to, from , next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
