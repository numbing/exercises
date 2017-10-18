var http = require('http');
var querystring = require('querystring');
var fs = require("fs");
var objURL = require("url");

//here i make unique id
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};
console.log(guid());

function processPost(request, response, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(request.method == 'POST') {
        request.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.on('end', function() {
            request.post = querystring.parse(queryData);
            callback();
        });

    } else {
      console.log("dad");
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end();
    }
}


function checkForFile(fileName, callback) {
  fs.exists(fileName, function(exists) {
    if(exists) {
      //file exists
      callback();
    } else {
      //create the empty file
      fs.writeFile(fileName, '[]', function(err, data) {
        callback();
      });
    }
  });
}


http.createServer(function(request, response) {


    var varURL = objURL.parse(request.url, true);

   if(request.url == '/'){
response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
   }else if(varURL.pathname == '/addnewcontact'){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./addcontact.html").pipe(response);
   }else if(varURL.pathname == '/api'){
    response.writeHead(200, {"Content-Type": "text/json"});
    fs.createReadStream("./data.json").pipe(response);
   } else if(request.method == 'POST' && varURL.pathname == '/savejson') {
        processPost(request, response, function() {
            console.log("aa",request.post);



            checkForFile("data.json", function() {
              fs.readFile("data.json", "utf8", function(err, data) {
                //here, the file always exist
                var varArray = [];

                varArray = JSON.parse(data);

                var postData = {firstName: request.post.firstname, lastName: request.post.lastname, email: request.post.email,phone: request.post.phone};

                varArray.push(postData);

                fs.writeFile("data.json", JSON.stringify(varArray), function(err) {
                  if(err) throw err;

                  response.writeHead(302, {
                       'Location': 'http://localhost:8000/'
                  });

                  response.end();
                });
              });
            });
            // Use request.post here
        });
    } else {
        response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        response.end();
    }

}).listen(8000);
