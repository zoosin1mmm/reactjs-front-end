// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
// };

import path from 'path';
import webpack from 'webpack';
exports {
  entry: [
    'eventsource-polyfill'
    // './main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'compiled.js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: ['', '.js', '.jsx','css', '.scss']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
	  $: 'jquery',
      React: 'react',
      ReactDOM:'react-dom'
    })
  ]
} 

