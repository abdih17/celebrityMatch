'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new ExtractPlugin('bundle-[hash].css'),
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  ],
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: '/\.css$/',
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 60000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' },
          },
        ],
      },
    ]
  }
}
