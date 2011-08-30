(function() {
  var jade;
  jade = require('jade');
  module.exports = function(httpServer) {
    return httpServer.get('/', function(req, res) {
      return res.render(__dirname + '/templates/default.jade', {
        layout: false
      });
    });
  };
}).call(this);
