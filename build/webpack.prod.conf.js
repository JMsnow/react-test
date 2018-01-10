const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf')
const CONFIG = require('./config')
const utils = require('./utils')

module.exports = merge(baseWebpackConf, {
    output: {
        filename: '[name]-[hash].js',
        path: utils.resolvePath('dist'),
        publicPath: CONFIG.publicPath
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
    ]
})