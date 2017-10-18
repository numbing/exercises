var http = require('http');

function onRequest(request, response) {
  console.log("A user made a request " + request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("hello world!");
  response.end();
}

http.createServer(onRequest).listen(8080);
console.log("The server is listening to 8080 port...");
