const webpack = require('webpack')

const HOST = 'localhost'
const PORT = 8083

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      clientLogLevel: 'warning',
      contentBase: 'dist',
      compress: false,
      host: HOST,
      port: PORT,
      open: true,
      overlay: { warnings: false, errors: true },
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      quiet: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }