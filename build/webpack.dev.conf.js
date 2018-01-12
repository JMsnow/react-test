const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConf = require('./webpack.base.conf.js')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConf, {
    devServer: {
        host: '0.0.0.0',
		hot: true,
		inline: true,
        port: 9000,
        stats: "errors-only"
    },
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

