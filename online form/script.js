var http = require('http');
var url = require('url')
var querystring = require('querystring');
var fs = require('fs');


function processPost(request, response, callback){
  var queryData = "";

  if(typeof callback !== 'function') return null;

  if(request.method == 'POST'){
    request.on('data', function(data){
      queryData += data;
      if(queryData.length >1e6){
        queryData = "";
        response.writeHead(413, {'Content-Type': 'text/plain'}).end();
        request.connection.destroy();
      }
    });

    request.on('end',function(){
      request.post = querystring.parse(queryData);
      callback();
    });
  } else{
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.end();
  }
}

http.createServer(function (req, res) {

  var objURL = url.parse(req.url);

  if(req.url == "/") {
    //show table list (contacts.html)

     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write("the list of tables will come here...");
     res.end();

  } else if (objURL.pathname == "/add_contact") {

fs.readFile('add_contact.html', function(err, data) {
      //var varJSONData = JSON.parse(data);

       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       res.end();

    });

  } else if (objURL.pathname == "/get_contacts") {
    //show back all the content of data.json
      fs.readFile('data.json', function(err, data) {
      //var varJSONData = JSON.parse(data);

       res.writeHead(200, {'Content-Type': 'text/json'});
       res.write(data);
       res.end();

    });
  }  else if (objURL.pathname == "/save_contacts") {
      processPost(req, res, function() {
            var varJSONData = "";
        fs.readFile('data.json', function(err, data) {

            varJSONData = JSON.parse(data);
            varJSONData.push({firstname: req.post.firstname });


            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("Success!!!");
            res.end();

        });

console.log(varJSONData);
      fs.writeFile( "data.json", JSON.stringify(varJSONData), "utf8", function(err) {
          if(err) throw err;
      });

      });
  }

  if(req.method == 'POST') {
        processPost(req, res, function() {

            res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
            res.end();
        });
  }


}).listen(8080);

