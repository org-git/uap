import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex);

import app from '@/store/modules/app'
import user from '@/store/modules/user'
import getters from '@/store/getters'

export default new vuex.Store({
  strict: true,
  state: {},
  modules: {
    app,
    user
  },
  getters,
  plugins: [createPersistedState()]
})
