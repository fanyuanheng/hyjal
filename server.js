(function() {
  var Hyjal;
  Hyjal = require('./application/hyjal');
  process.addListener('uncaughtException', function(err, stack) {
    console.log('------------------------');
    console.log('Exception: ' + err);
    console.log(err.stack);
    return console.log('------------------------');
  });
  new Hyjal({
    port: 8000
  });
}).call(this);
