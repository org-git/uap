'use strict';

const Mock = require('mockjs');
Mock.mock('/api/login', (req, res) => {
    return {
        data: {
            code: '200',
            data: {
                id: '9c30581a-8b13-11e8-8369-3c5282dad09b',
                username: 'test',
                mobile: '13012348765',
                email: 'test@mock.com',
                birthday: '1992-05-20'
            },
            message: '登录成功'
        }
    }
});