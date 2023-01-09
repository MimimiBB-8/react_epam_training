const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: true,
      progress: true,
    },
    static: './dist',
    open: true,
    historyApiFallback: true,
    setupExitSignals: true,
  },
});
