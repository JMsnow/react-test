module.exports = {
    publicPath: '/',
    inlineFileLimit: 8192,
    isCssModules: true,
    devServer: {
        host: '0.0.0.0',
		hot: true,
		inline: true,
        port: 9000,
        stats: "errors-only"
    }
}