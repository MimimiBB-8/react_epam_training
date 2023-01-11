const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack.common');
require('dotenv').config();

module.exports = () => {
  console.log(process.env.ENV);
  // eslint-disable-next-line global-require
  const config = require(`./config/webpack.${process.env.ENV}`);// eslint-disable-line import/no-dynamic-require
  return merge(commonConfig, config);
};
