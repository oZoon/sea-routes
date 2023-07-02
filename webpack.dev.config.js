const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
require('dotenv').config()

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    allowedHosts: "all",
    host: process.env.DEV_SERVER_HOST,
    port: +process.env.DEV_SERVER_PORT,
    historyApiFallback: true,
  },
})
