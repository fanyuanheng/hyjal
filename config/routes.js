module.exports = function (httpServer) {
  httpServer.get('/', function(req, res){
    res.send('Hello World');
  });

};