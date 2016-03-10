'use strict'

var res = require('./response-websocket');
var http = require('http');

function createApp() {
  return App;
}

var App = {};

App.map = {};

App.use = function(url, callback) {
  App.map['post/' + url] = callback;
};

App.listen = function(port, callback) {
  callback();
};

exports = module.exports = createApp;

window.call = function(type, url, request) {
  App.map[type + '/' + url](request, res, function(){});
}

window.respond = function(content) {
  console.log('Response code: ' + JSON.stringify(content));
}
