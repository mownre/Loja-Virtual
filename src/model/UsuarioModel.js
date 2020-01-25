const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TELEFONE_VALIDATOR_PATTERN = /^\(\d{2}\)\d{4,5}\-\d{4}/;

const Usuario = new Schema({
    nome_completo: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    cpf: {
        type: String,
        index: {
            unique: true
        },
        required: [true, 'O CPF é obrigatório']
        
    },
    email: {
        type: String,
        index: {
            unique: true
        },
        required: [true, 'O e-mail é obrigatório']
    },
    telefone: {
        type: String,
        validate: {
            validator: function(valor) {
                return TELEFONE_VALIDATOR_PATTERN.test(valor);
            },
            message: '{VALUE} não é um telefone válido'
        }
    },
    nome_usuario: {
        type: String,
        index: {
            unique: true
        },
        required: [true, 'O nome de usuário é obrigatório']
    },
    senha: String
});


module.exports = mongoose.model('Usuario', Usuario);
