const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const config = require('./config')
const baseWebpackConf = require('./webpack.base.conf.js')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConf, {
    devServer: config.devServer,
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: utils.resolvePath('index.html'),
			filename: 'index.html',
			inject: true
        })
    ],
    devtool: '#cheap-module-eval-source-map'
})

