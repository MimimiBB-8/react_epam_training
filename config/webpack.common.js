const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },

    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
