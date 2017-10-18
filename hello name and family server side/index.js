var http = require('http');
var fs = require('fs');
var url =require('url')
http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  if(q.firstname && q.lastname){
    var txt = "hello "+ q.firstname + " " + q.lastname;
    res.write(txt);
    res.end();
  }
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
