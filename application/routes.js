var jade = require('jade');

module.exports = function (httpServer) {
  httpServer.get('/', function(req, res){
    res.render(__dirname + '/templates/default.jade', { layout: false });
  });
};