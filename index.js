var http = require('http');
var https = require('https');

module.exports = (listener, options) =>
	options ?
		https.createServer(options, listener) :
		http.createServer(listener);
