const CopyPlugin  = require('copy-webpack-plugin');

module.exports = {
    devServer: function (configFunction) {
      return function (proxy, allowedHost) {
        const config = configFunction(proxy, allowedHost)
  
        config.client = {
          overlay: false,
        }
  
        return config
      }
    },
  }