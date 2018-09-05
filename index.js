var express = require('express');
var http = require('http');
var app = express();;

http.createServer(app).listen(3000);
console.log('Server Started');

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/account.html");
});

app.get("/getData", function(req,res){
  res.send("<h1>Don't be shy</h1>");
});
