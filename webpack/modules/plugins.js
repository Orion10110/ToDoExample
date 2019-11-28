const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('../utils')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.resolve('src/index.html')
    })
  ]
}
