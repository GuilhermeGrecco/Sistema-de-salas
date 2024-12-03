const express = require('express');
const SalaController = require('../controllers/SalaController');

const router = express.Router();

router.post('/', SalaController.criarSala);
router.get('/', SalaController.listarSalas);
router.get('/:id', SalaController.detalharSala);
router.put('/:id', SalaController.atualizarSala);
router.delete('/:id', SalaController.removerSala);

module.exports = router;