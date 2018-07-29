'use strict';
import api from '@/kits/api';

export default {
  /**
   * 
   * @param {*} data 数据
   * @param {*} callback 回调方法
   */
  login(data, callback) {
    return api.post('/api/token', data);
  },
  logout() {
    if (!this.$store.getters.authenticated) {
      this.$router.push('/login');
      return;
    }
    
    this.$router.push('/login');
    return;
  },
  userinfo() {
    return api.post('/api/userinfo');
  }
}
