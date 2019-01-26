'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://210.12.23.78:8082"',
  IMGBase_URL: '"http://210.12.23.78:8082"'
})
