'use strict'

var browserLogger = {};

browserLogger.error = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: red');
	if (msgObj) {
		console.log('%c' + msgObj, 'color: red');
	}
}

browserLogger.warn = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: yellow');
	if (msgObj) {
		console.log('%c' + msgObj, 'color: yellow');
	}
}

browserLogger.info = function(msgStr, msgObj) {
	console.log('%c' + msgStr, 'color: blue');
	if (msgObj) {
		console.log('%c' + msgObj, 'color: blue');
	}
}

browserLogger.log = function(msgStr, msgObj) {
	console.log(msgStr);
	if (msgObj) {
		console.log(msgObj);
	}
}

exports = module.exports = browserLogger;
