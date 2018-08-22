'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '0.0.0.0',
  PORT: 8080,
  API_BASE_URL: '"http://localhost:8080"'
})
