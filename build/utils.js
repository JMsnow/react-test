const path = require('path')

module.exports = {
	resolvePath: function(dir) {
		return path.resolve(__dirname, '..', dir)
	}
}
