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
      token: '76364b3e199e467198ab95109e73a1fe',
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
      name: "网站管理",
      icon: "iconfont icon-wdsy",
      child: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/project",
          name: "网站列表",
          icon: "iconfont icon-wdsy"
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/project/setting",
          name: "网站设置",
          icon: "iconfont icon-wdsy"
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "用户管理",
      icon: "iconfont icon-wdsy",
      child: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/user",
          name: "用户列表",
          icon: "iconfont icon-wdsy"
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/user/setting",
          name: "用户设置",
          icon: "iconfont icon-wdsy"
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "角色管理",
      icon: "iconfont icon-wdsy",
      child: [{
        id: Mock.Random.guid().toLowerCase().trim(),
        path: "/console/role",
        name: "角色列表",
        icon: "iconfont icon-wdsy"
      }]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "消息管理",
      icon: "iconfont icon-wdsy",
      child: [{
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/messages/unread",
          name: "未读消息",
          icon: "iconfont icon-wdsy"
        },
        {
          id: Mock.Random.guid().toLowerCase().trim(),
          path: "/console/messages/read",
          name: "已读消息",
          icon: "iconfont icon-wdsy"
        }
      ]
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "配置管理",
      icon: "iconfont icon-wdsy",
      child: [{
        id: Mock.Random.guid().toLowerCase().trim(),
        path: "/console/configure",
        name: "配置维护",
        icon: "iconfont icon-wdsy"
      }]
    }
  ];
  return {
    code: '200',
    data: menus,
    message: '请求成功'
  }
});
Mock.mock(API_PATH + '/api/projects', (req, res) => {
  let data = [{
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "github",
      icon: "iconfont icon-vip-www",
      url: "http://github.com"
    },
    {
      id: Mock.Random.guid().toLowerCase().trim(),
      name: "google",
      icon: "iconfont icon-vip-www",
      url: "http://google.com.hk"
    }
  ];
  return {
    code: '200',
    data: data,
    message: '请求成功'
  }
});
