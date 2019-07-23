'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"test"',
  ROOT_API : '"http://192.168.0.89:4000"'
})
