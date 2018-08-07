import Vue from 'vue'
import Router from 'vue-router'

import home from '@/router/home'
import console from '@/router/console'
import admin from '@/router/admin'
import error from '@/router/error'

Vue.use(Router)

export default new Router({
  routes: [home, console, admin, error]
});
