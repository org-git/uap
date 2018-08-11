'use strict';

import api from '@/kits/api'
import store from '@/store'

export  default {
    /**
     * 获取所有网站
     * 
     * @param {any} data 入参
     * @returns 
     */
    getAll(data) {
        // data.id = store.getters.user.id;
        return api.post('/api/websites', data);
    }
}