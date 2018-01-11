const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf')
const config = require('./config')
const utils = require('./utils')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConf, {
    output: {
        filename: '[name]-[hash].js',
        path: utils.resolvePath('dist'),
        publicPath: config.publicPath
    },
    plugins: [
        new CleanWebpackPlugin(utils.resolvePath('dist/*.*'), {
            root: utils.resolvePath('')
        }),
        new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false,
			sourceMap: true
		})
    ],
    devtool: '#source-map'
})