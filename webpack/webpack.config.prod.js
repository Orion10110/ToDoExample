'use strict'

const merge = require('webpack-merge')

const BASE_CONFIG  = require('./webpack.config.base')
const CSS_LOADER = require('./modules/css-prod');

const PROD = {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
}

module.exports = merge(BASE_CONFIG, CSS_LOADER, PROD)
