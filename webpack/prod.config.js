const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(baseConfig, {
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.css'),
    Minify JS
    new UglifyJsPlugin({
      sourceMap: true
    }),
    Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
    })
  ],
  externals: {
      // Use external versions of React and ReactDOM
      "react": "React",
      "react-dom": "ReactDOM"
  },
});
