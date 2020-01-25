const express = require('express');
const router = express.Router();


const UsuarioController =  require('../controllers/UsuarioController');

const controller = new UsuarioController();

router.post('/cadastrar', controller.cadastrarUsuario);
router.get('/listar', controller.buscarTodosUsuarios);

module.exports = router;