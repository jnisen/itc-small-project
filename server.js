var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))
app.listen(port, function () { return console.log('App Listening on port', port); });
