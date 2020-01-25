const UsuarioRepotiroy = require('../repositories/usuarioRepository');
const Usuario = require('../model/UsuarioModel');

class UsuarioController {

    constructor() {}

    cadastrarUsuario = function(req, res, next) {
        const UsuarioRepository = new UsuarioRepotiroy();
        
        const usuarioData = req.body;
        const usuario = new Usuario({
            nome_completo: usuarioData.nome_completo,
            cpf: usuarioData.cpf,
            email: usuarioData.email,
            telefone: usuarioData.telefone,
            nome_usuario: usuarioData.nome_usuario,
            senha: usuarioData.senha
        });


        UsuarioRepository.save(usuario, err => {
            var _returnStatusCode = 501;
            var _returnContent = { message: ''};

            if(!err) {
                console.log("Saved without errors");
                _returnStatusCode = 200;
                _returnContent = usuario;
            } else {
                _returnContent.message = String(err);
                console.log("Error in user persistence.,", "Error: ", err);
            }

            res.status(_returnStatusCode).json(_returnContent);
        });
    }

    buscarTodosUsuarios = function(req, res) {
        const UsuarioRepository = new UsuarioRepotiroy();
        UsuarioRepository.listAllUsuarios().then(usuarios => {
            res.status(200).json(usuarios);
        })

    }
}   


module.exports = UsuarioController;