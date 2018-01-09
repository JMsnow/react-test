const path = require('path')
const utils = require('./utils')

module.exports = {
    entry: utils.resolvePath('src/app.js'),
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
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
}