'use strict';

import api from '@/kits/api'

export default {
  /**
   * 获取所有日志
   *
   * @param {any} data 入参
   * @returns
   */
  getAll(data) {
    return api.post('/api/logs', data);
  }
}
