var util = require('util');
var http = require('http');
var express = require('./libs/express-websocket');
var VectorWatchSDK = require('./node_modules/vectorwatch-sdk');
var app = express();

/**
 * @constructor
 */
 function VectorWatchBrowser(arguments) {

 	if (process.env.IS_BROWSER == true) {
 		http.createServer = function(cb) {
 			return {listen: function() {}};
 		};
 	}

 	VectorWatchSDK.call(this, arguments);

 	if (process.env.IS_BROWSER == true) {
 		this.logger = require('./libs/browser-logger.js');
 		this.createServer = function(cb) {
 			if (cb) {
 				cb();
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

 		this.pushNotification = function(channelLabel, value, delay) {
 			if (channelLabel == "emulatorUniqueLabel") {
 				if (typeof window !== 'undefined' && window.onEmulatorPushNotification) {
 					window.onEmulatorPushNotification(value);
 				}
 			}
 			else {
 				VectorWatchSDK.prototype.pushNotification.call(this, channelLabel, value, delay);
 			}
 		};
 	}

 	app.use('/api/callback', this.getMiddleware());
 }
 util.inherits(VectorWatchBrowser, VectorWatchSDK);

 global.vwb_getSchedule = function() {
 	return VectorWatchSDK.getSchedule();
 }

 module.exports = VectorWatchBrowser;