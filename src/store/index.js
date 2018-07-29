import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import { ACCESS_TOKEN } from '@/kits/keys'
import setters from '@/store/modules/setters'
import app from '@/store/modules/app'
import user from '@/store/modules/user'
import getters from '@/store/getters'

export default new vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem(ACCESS_TOKEN) || ''
  },
  modules: {
    setters,
    app,
    user
  },
  getters
})
