'use strict';
import api from '@/kits/api';

export default {
    /**
     * 
     * @param {*} data 数据
     * @param {*} callback 回调方法
     */
    login: function(data, callback) {
        // return api.post('/api/login', data);
        return {
            code: '200',
            data: {
                id: '9c30581a-8b13-11e8-8369-3c5282dad09b',
                username: 'test',
                mobile: '13012348765',
                email: 'test@mock.com',
                birthday: '1992-05-20'
            },
            message: '登录成功'
        };
    }
}