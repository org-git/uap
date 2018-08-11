'use strict';

import api from '@/kits/api'
import store from '@/store'

export  default {
    /**
     * 获取所有消息
     * 
     * @returns 
     */
    getAll() {
        let data = { id: store.getters.user.id };
        return api.post('/api/messages', data);
    }
}