'use strict'

var Response = {
  content: {
    status: 0,
    header: {},
    body: ''
  },
  writeHead: function(status, headerObj) {
    Response.content.status = status;
    Response.content.header = headerObj;
  },
  write: function(body) {
    Response.content.body += body;
  },
  end: function() {
    if (typeof window !== 'undefined') {
      window.respond(Response.content);
    }
    Response.reset();
  },
  reset: function() {
    Response.content.status = 0;
    Response.content.header = {};
    Response.content.body = '';
  }
};

exports = module.exports = Response;
