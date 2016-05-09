var util = require('util');
var express = require('./libs/express-websocket');
var VectorWatchSDK = require('vectorwatch-sdk');
var app = express();

/**
 * @constructor
 */
function VectorWatchBrowser(arguments) {
	VectorWatchSDK.call(this, arguments);

	app.use('/api/callback', this.getMiddleware());
}
util.inherits(VectorWatchBrowser, VectorWatchSDK);

module.exports = VectorWatchBrowser;