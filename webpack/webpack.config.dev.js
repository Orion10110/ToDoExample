'use strict'

const merge = require('webpack-merge')
const BASE_CONFIG  = require('./webpack.config.base')
const DEV_SERVER = require('./modules/dev-server')
const CSS_LOADER = require('./modules/css-dev')

module.exports = merge(BASE_CONFIG, CSS_LOADER, DEV_SERVER) 
