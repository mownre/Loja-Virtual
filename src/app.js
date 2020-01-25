const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();

//Here goes the application routes
const index = require('./routes/index');
const usuario = require('./routes/UsuarioRoute');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(index);
app.use(usuario);


try {
    mongoose.connect('mongodb://localhost/loja',  {useNewUrlParser: true})
} catch (error) {
    handleError(error);
}



module.exports = app;