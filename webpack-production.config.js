var webpack = require('webpack');
var Config = require('./webpack.config.js');

var WebpackDefinitions = new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
   }
})

Config.plugins.push(WebpackDefinitions);

module.exports = Config;
