const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3000',
  },

  module: {
    rules: [{
    test: /\.scss$/,
      use: [{
          loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },
});
