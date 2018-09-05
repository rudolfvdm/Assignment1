var url = require('url');
var fs = require('fs');
var bodyParser= require(body-parser);
var email = $("#email").val();
var password = $("#password").val();

event.preventDefault();

$.ajax({
  type: "POST",
  contentType: "application/json",
  url: window.location + "account.html",
  data: JSON.stringify(formdata),
  datatype: "JSON",
  success: function(){
    $("#result").text("You are logged in!");
  },
  error: function(e){
    $("#result").text("Try again!");
  }
})

function renderHTML(path, response) {
  fs.readFile(path, null, function(err, data) {
    if (err) {
      response.writeHead(404);
      response.write('File not found');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function (request, response) {
    var path = url.parse(request.url).pathname;
    if (path == '/') {
      renderHTML('./index.html', response);
    } else {
      renderHTML('', response);
    }
  }
}
