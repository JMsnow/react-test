const SERVERS = {
	development: 'http://47.96.27.220:8081',
	sit: 'http://47.96.27.221:8081',
	uat: 'http://47.96.27.222:8081',
	production: 'http://47.96.27.223:8081'
}

module.exports = {
    publicPath: '/',
	host: SERVERS[process.env.NODE_ENV],
	inlineFileLimit:8192
}