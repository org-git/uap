'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  HOST: '0.0.0.0',
  PORT: 80,
  API_BASE_URL: '"http://localhost:8080"'
})
