const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')
const baseWebpackConf = require('./webpack.base.conf.js')
console.log(__dirname)
console.log(utils.resolvePath('src/components'))
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
        new HtmlWebpackPlugin({
            template: utils.resolvePath('index.html'),
			filename: 'index.html',
			inject: true
        })
    ],
    devtool: '#cheap-module-eval-source-map'
})

