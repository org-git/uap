import {
  USER_INFO
} from '@/kits/keys';
import {
  stat
} from 'fs';

export default {
  state: {
    id: '',
    /** 
     * 用户名
     */
    username: '',
    /** 
     * 头像
     */
    avatar: '',
    /** 
     * 性别
     */
    sex: 1,
    /** 
     * 真实姓名
     */
    realname: '',
    /** 
     * 出生日期
     */
    birthday: '',
    /** 
     * 手机号码
     */
    mobile: '',
    /** 
     * 邮件
     */
    email: '',
    /** 
     * 当前用户角色
     */
    roles: []
  },
  mutations: {
    /**
     * 登录
     * 
     * @param {any} state 
     * @param {any} user 
     * @returns 
     */
    login(state, user) {
      state.id = user.id || '';
      state.username = user.username || '';
      state.avatar = user.avatar || '';
      state.sex = user.sex || 1;
      state.realname = user.realname || '';
      state.birthday = user.birthday || new Date().toLocaleDateString();
      state.mobile = user.mobile || '';
      state.email = user.email || '';
      state.roles = user.roles || [];
    },
    /**
     * 注销
     * 
     * @param {any} state 
     */
    logout(state) {
      state.id = '';
      state.name = '';
      state.avatar = '';
      state.sex = '';
      state.realname = '';
      state.birthday = '';
      state.mobile = '';
      state.email = '';
      state.roles = [];
    }
  },
  actions: {
    /**
     * 登录
     * 
     * @param {any} context 
     * @param {any} user 
     */
    login(context, user) {
      context.commit('login', user);
    },
    /**
     * 注销
     * 
     * @param {any} context 
     */
    logout(context) {
      context.commit('logout');
    }
  }
}
