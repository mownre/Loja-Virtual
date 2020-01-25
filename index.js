var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

var router = require('./api/router.js');

app.use(router);

app.listen(8080, function(err) {
    console.log("Inicializado!");
});
