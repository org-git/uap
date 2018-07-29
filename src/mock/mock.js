'use strict';

const Mock = require('mockjs');
var API_PATH = 'http://localhost:8080';
var Random = Mock.Random;

/** 设置所有ajax请求的超时时间，模拟网络传输耗时 */
Mock.setup({
  timeout: 0 - 300
});
Mock.mock(API_PATH + '/api/token', (req, res) => {
  return {
    code: '200',
    data: {
      token: '76364b3e199e467198ab95109e73a1fe',
      expire: Random.datetime()
    },
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/userinfo', (req, res) => {
    return {
      code: '200',
      data: {
        id: '9c30581a-8b13-11e8-8369-3c5282dad09b',
        username: 'test',
        realname: Random.cname(),
        mobile: '13012348765',
        email: Random.email(),
        birthday: Random.date(),
        roles: ['admin', 'console', 'test']
      },
      message: '请求成功'
    }
  });