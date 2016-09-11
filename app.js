var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('On Heroku Node.js+Express');
});

app.listen(80, function() {
	console.log("Listening on 80");
});

