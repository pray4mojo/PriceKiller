const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/public/src',
  entry: './index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: [/\.wexbim$/, /\.docx$/, /\.csv$/, /\.mp4$/, /\.xlsx$/, /\.doc$/, /\.avi$/, /\.webm$/, /\.mov$/, /\.mp3$/, /\.pdf$/],
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          'url-loader?limit=200000',
        ],
      },
      {
        test: /\.(gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]',
              },
            },
          },
        ],
      },
      {
        test: /\.jsx\.html$/,
        exclude: /node_modules/,
        use: [
          'babel!react-pure-html-component',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  }
};

