'use strict'

var browserLogger = {};

browserLogger.error = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: red');
	if (msgObj) {
		console.log(msgObj);
	}
}

browserLogger.warn = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: #FFCC00');
	if (msgObj) {
		console.log(msgObj);
	}
}

browserLogger.info = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: blue');
	if (msgObj) {
		console.log(msgObj);
	}
}

browserLogger.log = function(msgStr, msgObj) {
	console.log(msgStr);
	if (msgObj) {
		console.log(msgObj);
	}
}

exports = module.exports = browserLogger;
