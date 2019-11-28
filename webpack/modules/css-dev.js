module.exports = {
    module: {
      rules: [{
        test: /\.(css)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
        ]
      }]
    }
  }