const utils = require('../utils')

module.exports = {
  resolve: {
    alias: {
      pages: utils.resolve('src/components/pages'),
      components: utils.resolve('src/components'),
      images: utils.resolve('src/images'),
      services: utils.resolve('src/services'),
      constants: utils.resolve('src/constants'),
      fonts: utils.resolve('src/fonts'),
    }
  }
}
