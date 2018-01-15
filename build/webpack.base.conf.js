const webpack = require('webpack')
const utils = require('./utils')
const config = require('./config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        app: ['babel-polyfill', utils.resolvePath('src/app.js')],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: utils.resolvePath('dist'),
        publicPath: config.publicPath
    },
    module: {
        rules: [
            {
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				include: [
					utils.resolvePath('src'),
					utils.resolvePath('build')
				]
			},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: config.isCssModules,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        },
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
            },
            {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { 
                            limit: config.inlineFileLimit,
                            name: 'assets/images/[name].[hash:7].[ext]'
                        }
                    }
                ]
			}
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: 3
		}),
        extractSass
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': utils.resolvePath('src'),
            'containers': utils.resolvePath('src/containers')
        }
    }
}