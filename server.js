var express = require('express');
var expensive = require('./expensive.json');
var server = express();

server.get('/', function(request, response){
  response.sendFile("index.html");
})

server.get('/restaurants', function(request, response){
  response.send(JSON.stringify(expensive));
})


server.get('/restaurants:name', function(request, response){
  response.send(JSON.stringify(expensive[request.params.name]));
})

server.get('/restaurants:name/:type', function(request, response){
  response.send(JSON.stringify(expensive[request.params.name][request.params.type]));
})

server.listen(3000, function(){
  console.log("Server listening on port 3000!");
})