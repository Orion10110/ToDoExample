'use strict'

const utils = require('./utils')
const merge = require('webpack-merge')
const modules = require('./modules')
const path = require('path')

module.exports = merge({
  output: {
    path: path.resolve(__dirname, '..' ,'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [utils.resolve('src'), 'node_modules']
  }
},
modules)
