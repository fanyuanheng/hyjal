var jade = require('jade');

module.exports = function (httpServer) {
  httpServer.get('/', function(req, res){
    jade.renderFile(__dirname + '/templates/default.jade', function(err, html){
      if (err) throw err;
      res.send(html)
    });
  });
};