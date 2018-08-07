import '@/kits/keys'
import {
  DEFAULT_LANG
} from '@/kits/keys'

export default {
  state: {
    /** 
     * token
     */
    token: '',
    /** 
     * 语言
     */
    language: DEFAULT_LANG
  },
  mutations: {
    /**
     * 设置语言
     * 
     * @param {any} state 
     * @param {any} lang 
     */
    setlang(state, lang) {
      state.language = lang.lang || DEFAULT_LANG;
    },
    /**
     * 设置token
     * 
     * @param {any} state 
     * @param {any} token 
     * @returns 
     */
    settoken(state, token) {
      state.token = token || '';
    },
    /**
     * 删除token
     * 
     * @param {any} state 
     */
    removetoken(state) {
      state.token = '';
    }
  },
  actions: {
    /**
     * 设置语言
     * 
     * @param {any} context 
     * @param {any} lang 
     */
    setlang(context, lang) {
      context.commit('setlang', lang);
    },
    /**
     * 设置token
     * 
     * @param {any} context 
     * @param {any} token 
     */
    settoken(context, token) {
      context.commit('settoken', token);
    },
    /**
     * 删除token
     * 
     * @param {any} context 
     */
    removetoken(context) {
      context.commit('removetoken');
    }
  }
}
