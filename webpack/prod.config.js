const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.css'),
    // Minify JS
    // new UglifyJsPlugin({
    //   sourceMap: true
    // }),
    // Minify CSS
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    // }),
  ],
  externals: {
      // Use external versions of React and ReactDOM
      "react": "React",
      "react-dom": "ReactDOM"
  },
});
