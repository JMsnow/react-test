const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConf = require('./webpack.base.conf.js')

module.exports = merge(baseWebpackConf, {
    devServer: {
        host: '0.0.0.0',
		hot: true,
		inline: true,
        port: 9000,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: '#cheap-module-eval-source-map'
})

