'use strict';

const Mock = require('mockjs');
const API_PATH = 'http://localhost:8080';

/** 设置所有ajax请求的超时时间，模拟网络传输耗时 */
Mock.setup({
  timeout: 0 - 300
});
Mock.mock(API_PATH + '/api/token', (req, res) => {
  return {
    code: '200',
    data: {
      token: Mock.Random.guid().toLowerCase().trim().replace(/\-/g, ''),
      expire: Mock.Random.datetime()
    },
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/userinfo', (req, res) => {
  var data = Mock.mock({
    id: Mock.Random.guid().toLowerCase().trim(),
    username: Mock.Random.name(),
    avatar: '/assets/images/logo.png',
    realname: Mock.Random.cname(),
    sex: Mock.Random.integer(0, 1),
    mobile: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
    telphone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
    email: Mock.Random.email(),
    birthday: Mock.Random.date(),
    roles: ['admin', 'console', 'test']
  });
  return {
    code: '200',
    data: data,
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/menus', (req, res) => {
  let menus = [{
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '网站管理',
      icon: 'iconfont icon-vip-www',
      children: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/website',
          name: '网站列表',
          icon: 'iconfont icon-guanliyuan_guanliyuanrizhi'
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/website/setting',
          name: '网站设置',
          icon: 'iconfont icon-peizhishujuyuan'
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '用户管理',
      icon: 'iconfont icon-navicon-jsgl',
      children: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/user',
          name: '用户列表',
          icon: 'iconfont icon-users'
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/user/setting',
          name: '用户设置',
          icon: 'iconfont icon-userset'
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '角色管理',
      icon: 'iconfont icon-jiaose',
      children: [{
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/role',
        name: '角色列表',
        icon: 'iconfont icon-biaoshilei_jiaoseqiehuan'
      }, {
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/role',
        name: '角色授权',
        icon: 'iconfont icon-jiaosequanxian'
      }]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '消息管理',
      icon: 'iconfont icon-xiaoxi',
      children: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/messages/unread',
          name: '未读消息',
          icon: 'iconfont icon-wdsy'
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: '/console/messages/read',
          name: '已读消息',
          icon: 'iconfont icon-wdsy'
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '配置管理',
      icon: 'iconfont icon-919caidan_xiuli',
      children: [{
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/configure',
        name: '配置维护',
        icon: 'iconfont icon-peizhi'
      }]
    }, {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: '日志管理',
      icon: 'iconfont icon-lanmupeizhi',
      children: [{
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/log',
        name: '日志列表',
        icon: 'iconfont icon-qingqiugenzongrizhi'
      }, {
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/log/operation',
        name: '操作日志',
        icon: 'iconfont icon-caozuorizhi'
      }, {
        id: Mock.Random.guid().toLowerCase().trim(),
        path: '/console/log/setting',
        name: '日志设置',
        icon: 'iconfont icon-config-rule'
      }]
    }
  ];
  return {
    code: '200',
    data: menus,
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/websites', (req, res) => {
  let data = [{
      id: Mock.Random.guid().toLowerCase().trim(),
      name: Mock.mock('@ctitle'),
      icon: 'iconfont icon-vip-www',
      url: Mock.mock('@url'),
      summary: Mock.mock('@sentence'),
      introduce: Mock.mock('@paragraph'),
      created: Mock.mock('@now'),
      status: Mock.Random.integer(1, 3)
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: Mock.mock('@ctitle'),
      icon: 'iconfont icon-vip-www',
      url: Mock.mock('@url'),
      summary: Mock.mock('@sentence'),
      introduce: Mock.mock('@paragraph'),
      created: Mock.mock('@now'),
      status: Mock.Random.integer(1, 3)
    }
  ];
  return {
    code: '200',
    data: data,
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/messages', (req, res) => {
  let data = [{
      id: Mock.Random.guid().toLowerCase().trim(),
      title: Mock.mock('@ctitle'),
      text: Mock.mock('@cparagraph'),
      sender: Mock.mock('@cname')
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      title: Mock.mock('@ctitle'),
      text: Mock.mock('@cparagraph'),
      sender: Mock.mock('@cname')
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      title: Mock.mock('@ctitle'),
      text: Mock.mock('@cparagraph'),
      sender: Mock.mock('@cname')
    }
  ];
  return {
    code: '200',
    data: data,
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/logs', (req, res) => {
  let data = [{
    id: Mock.Random.guid().toLowerCase().trim(),
    userid: Mock.Random.guid().toLowerCase().trim(),
    ip: Mock.Random.ip(),
    creatat: Mock.Random.now(),
    title: Mock.mock('@ctitle'),
    text: Mock.Random.csentence()
  }];
  return {
    code: '200',
    data: data,
    message: '请求成功'
  }
});
