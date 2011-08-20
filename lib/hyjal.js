var http = require('http')
    , sys = require('sys')
    , express  = require('express');

function Hyjal(options) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;

  self.settings = {
    port: options.port
  };

  self.init();
};

Hyjal.prototype.init = function() {
  var self = this;

  self.httpServer = self.createHTTPServer();

  self.httpServer.get('/', function(req, res){
    res.send('Hello World');
  });

  self.httpServer.listen(self.settings.port);

  sys.log('Server started on PORT ' + self.settings.port);
};

Hyjal.prototype.createHTTPServer = function() {
  var self = this;

  var server = express.createServer();
  return server;
}

module.exports = Hyjal;