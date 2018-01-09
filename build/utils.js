const path = require('path')

exports.resolvePath = function (dir) {
	return path.resolve(__dirname, '..', dir)
}