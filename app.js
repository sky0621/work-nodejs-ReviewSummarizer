var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('On Heroku Node.js+Express');
});

app.listen(process.env.PORT, function() {
	console.log("Listening");
});

