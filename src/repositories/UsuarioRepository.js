const mongoose = require('mongoose');

class UsuarioRepository {
    constructor() {}

    save(usuario, cb) {
        console.log("Salvando usuario no repositorio  " + usuario);

        usuario.save(function(err) {
            cb(err);
        });
    }

    listAllUsuarios() {
        return mongoose.model('Usuario').find().exec();
    }
}

module.exports = UsuarioRepository;