jade = require('jade')

module.exports = (httpServer) ->
  httpServer.set('view engine', 'jade')
  httpServer.get('/',
    (req, res) ->
      res.render __dirname + '/views/index'
  )