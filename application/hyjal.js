(function() {
  var Hyjal, express, http, jade, sys;
  http = require('http');
  sys = require('sys');
  express = require('express');
  jade = require('jade');
  Hyjal = (function() {
    function Hyjal(options) {
      this.settings = {
        port: options.port
      };
      this.httpServer = express.createServer();
      require('./routes')(this.httpServer);
      this.httpServer.listen(this.settings.port);
      sys.log('Server started on PORT ' + this.settings.port);
    }
    return Hyjal;
  })();
  module.exports = Hyjal;
}).call(this);
