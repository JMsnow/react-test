const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf')
const config = require('./config')
const utils = require('./utils')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConf, {
    plugins: [
        new CleanWebpackPlugin(utils.resolvePath('dist/*'), {
            root: utils.resolvePath('')
        }),
        new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false,
			sourceMap: true
        }),
        new HtmlWebpackPlugin({
			template: utils.resolvePath('index.html'),
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		})
    ],
    devtool: '#source-map'
})