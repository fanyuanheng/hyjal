http = require('http')
sys = require('sys')
express  = require('express')
jade = require('jade')

class Hyjal
  constructor: (options) ->
    @settings =
      port: options.port
    @httpServer = express.createServer()
    require('./routes')(@httpServer)
    @httpServer.use("/stylesheets", express.static(__dirname + '/public/css'));
    @httpServer.listen(@settings.port)
    sys.log('Server started on PORT ' + @settings.port)

module.exports = Hyjal