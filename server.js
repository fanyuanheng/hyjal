var http = require('http'),
    sys = require('sys');

var server = http.createServer(function (req, res) {
  req.addListener("end", function(){
    res.writeHead("200", {
        'Content-Type' : 'text/plain'
    });
    res.write(sys.inspect(res));
    res.end();
  });
})

server.listen(8000);

console.log('Server running at port 8000...');