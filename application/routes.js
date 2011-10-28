(function() {
  var jade;
  jade = require('jade');
  module.exports = function(httpServer) {
    httpServer.set('view engine', 'jade');
    return httpServer.get('/', function(req, res) {
      return res.render(__dirname + '/views/index');
    });
  };
}).call(this);
