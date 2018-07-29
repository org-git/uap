'use strict';

import axios from 'axios';
import store from '@/store';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(function (config) {
    let token = store.getters.token;
    if(token) {
        config.headers.Authorization = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
/**
 * 响应拦截器
 */
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

var API_PATH = process.env.API_BASE_URL;
/**
 * 创建axios实例
 */
const service = axios.create({
    baseURL: API_PATH,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

/**
 * 接口公共方法
 */
export default {
    /**
     * 默认参数
     */
    default: {
        /**
         * 服务器地址
         */
        url: 'http://localhost:8080'
    },
    /**
     * GET请求
     */
    get: function (url) {
        // url = this.default.url + url;
        return service.get(url);
    },
    /**
     * POST请求
     */
    post: function (url, data) {
        // url = this.default.url + url;
        return service.post(url, data);
    }
}
