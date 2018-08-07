import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex);

import setters from '@/store/modules/setters'
import app from '@/store/modules/app'
import user from '@/store/modules/user'
import getters from '@/store/getters'

export default new vuex.Store({
  strict: true,
  state: {   
  },
  modules: {
    setters,
    app,
    user
  },
  getters,
  plugins: [createPersistedState()]
})
