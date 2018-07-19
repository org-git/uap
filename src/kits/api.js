'use strict';
import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * 请求拦截器
 */
axios.interceptors.request.use(function (config) {
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

const service = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8080',
    timeout: 6000
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
        url = this.default.url + url;
        return service.get(url);
    },
    /**
     * POST请求
     */
    post: function (url, data) {
        url = this.default.url + url;
        return service.post(url, data);
    }
}