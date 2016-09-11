var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('On Heroku Node.js+Express');
});

app.listen(8929, function() {
	console.log("Listening on 8929");
});

