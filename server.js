process.addListener('uncaughtException', function (err, stack) {
  console.log('------------------------');
  console.log('Exception: ' + err);
  console.log(err.stack);
  console.log('------------------------');
});

var Hyjal = require('./application/hyjal');

new Hyjal({
  port: 8000
});