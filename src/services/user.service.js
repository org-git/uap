'use strict';

import api from '@/kits/api'
import store from '@/store'

export default {
  /**
   * 用户登录
   * 
   * @param {*} data 数据
   */
  login(data) {
    return api.post('/api/token', data);
  },
  /**
   * 注销
   * 
   * @returns 
   */
  logout() {
    if (!this.$store.getters.authenticated) {
      this.$router.push('/login');
      return;
    }

    this.$router.push('/login');
    return;
  },
  /**
   * 获取当前用户信息
   * 
   * @returns 
   */
  userinfo() {
    let data = { id: store.getters.user.id };
    return api.post('/api/userinfo', data);
  }
}
