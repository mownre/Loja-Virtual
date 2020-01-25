const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome_completo: String,
    cpf: String,
    email: String,
    telefone: String,
    nome_usuario: String,
    senha: String
});

module.exports = mongoose.model('Usuario', Usuario);
