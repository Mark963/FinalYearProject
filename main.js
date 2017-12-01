var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// This is where the post is displayed to the user when the button is clicked
app.post('/focus', function (req, res) {
	console.log("post is up and running!!");
	console.log(req.body.make);
   res.send('The best car is a ' + req.body.make + " " + req.body.model);
})
app.delete('/focus', function (req, res) {
  res.redirect('/');
})
// This is where the the script GETS the html file to display.
app.get('/alfa', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/alfa.html'));
});

app.get('/ford', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/ford.html'));
});

app.get('/audi', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/audi.html'));
});

app.get('/vw', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/vw.html'));
});

app.get('/rover', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/rover.html'));
});

app.get('/renault', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/renault.html'));
});

app.get('/opel', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/opel.html'));
});

app.get('/toyota', function(req, res) {
console.log("Hello");
res.sendFile(path.join(__dirname + '/toyota.html'));
});

// This is where the page is put on the server at 8081

app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})











