Hyjal = require('./application/hyjal')

process.addListener('uncaughtException',
  (err, stack) ->
    console.log('------------------------')
    console.log('Exception: ' + err)
    console.log(err.stack)
    console.log('------------------------')
)

new Hyjal
  port: 8000