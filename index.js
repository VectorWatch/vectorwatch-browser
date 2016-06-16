var util = require('util');
var express = require('./libs/express-websocket');
var VectorWatchSDK = require('vectorwatch-sdk');
var app = express();

/**
 * @constructor
 */
 function VectorWatchBrowser(arguments) {
 	VectorWatchSDK.call(this, arguments);

 	if (process.env.IS_BROWSER == true) {
 		this.logger = require('./libs/browser-logger.js');
 		this.createServer = function(scheduleJob) {
 			if (scheduleJob) {
 				scheduleJob();
 			}
 		};

 		this.pushStreamValue = function(channelLabel, value, delay) {
 			if (channelLabel == "emulatorUniqueLabel") {
 				if (typeof window !== 'undefined' && window.onEmulatorPushData) {
 					window.onEmulatorPushData(value);
 				}
 			}
 			else {
 				VectorWatchSDK.prototype.pushStreamValue.call(this, channelLabel, value, delay);
 			}
 		};
 	}

 	app.use('/api/callback', this.getMiddleware());
 }
 util.inherits(VectorWatchBrowser, VectorWatchSDK);

 module.exports = VectorWatchBrowser;