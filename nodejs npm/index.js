var objhttp = require("http");
var objURL = require("url");

function onRequest(request, response){
  console.log('request resive from :'+request.url);
  response.writeHead(200,{"contenet-type" : "text/html"});

  var objParams = objURL.parse(request.url, true).query;

  console.log(objParams.param1);

  response.write("hello world mmirrrrrrrrrrrrr");
  response.end();
}

objhttp.createServer(onRequest).listen(8080);