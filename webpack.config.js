const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/public/src',
  entry: './index.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react','stage-1','stage-2']
      }
    }]
  }
};