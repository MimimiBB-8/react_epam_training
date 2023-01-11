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
    extensions: ['.ts', '.tsx', '.js', '.sass', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            // eslint-disable-next-line global-require
            implementation: require('sass'),
            sassOptions: {
              indentedSyntax: true, // optional
            },
          },
        }],
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
