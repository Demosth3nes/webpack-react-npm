const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, '../demo'),
  SRC: path.resolve(__dirname, '../src'),
  JS: path.resolve(__dirname, '../src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'dev.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('index.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']
        ),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']
        )
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
