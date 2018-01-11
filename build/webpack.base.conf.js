const webpack = require('webpack')
const utils = require('./utils')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        app: ['babel-polyfill', utils.resolvePath('src/app.js')]
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [{loader: "css-loader"},{loader: "sass-loader"}],
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
        new webpack.DefinePlugin({
			HOST: JSON.stringify(config.host)
		}),
        new HtmlWebpackPlugin({
            template: utils.resolvePath('index.html'),
			filename: 'index.html',
			inject: true
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