var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
	// console.log("file io");
    // res.sendFile(path.join(__dirname + '/index.html'));
// });


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



app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})











