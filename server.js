var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('<h1>Good App</h1>');
});
app.listen(port, function () { return console.log('App Listening on port', port); });
