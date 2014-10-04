var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/main.js',
  devtool: 'sourcemap',
  output: {
    path: __dirname + '/public/bundle.js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx-loader', 'jsx?harmony'] },
    ]
  }
};
