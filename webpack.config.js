const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSMinimizer = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/mainModules/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'}),
    new CSSMinimizer()
  ],
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new CSSMinimizer(),
    ]
  }
}