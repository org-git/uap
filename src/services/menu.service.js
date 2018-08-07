'use strict';

import api from '@/kits/api'
import store from '@/store'

export  default {
    /**
     * 获取所有菜单
     * 
     * @returns 
     */
    getmenus() {
        let data = { id: store.getters.user.id };
        return api.post('/api/menus', data);
    }
}