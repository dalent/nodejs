var server=require('./httpServer.js');
var dispatch = require('./dispatch');

server.onStart("127.0.0.1", 80, dispatch.dispatch);
