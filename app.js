var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(process.env.PORT, function() {
	console.log("Listening");
});

