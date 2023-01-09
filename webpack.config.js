const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common');

module.exports = (env) => {
  // eslint-disable-next-line global-require
  const config = require(`./config/webpack.${env.env}`);// eslint-disable-line import/no-dynamic-require
  return merge(commonConfig, config);
};
