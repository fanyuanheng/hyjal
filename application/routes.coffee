jade = require('jade')

module.exports = (httpServer) ->
  httpServer.get('/',
    (req, res) ->
      res.render __dirname + '/templates/default.jade', layout: false
  )