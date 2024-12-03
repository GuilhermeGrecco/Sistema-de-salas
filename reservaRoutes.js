const express = require('express');
const ReservaController = require('../controllers/ReservaController');

const router = express.Router();

router.post('/', ReservaController.criarReserva);
router.get('/', ReservaController.listarReservas);
router.put('/:id', ReservaController.atualizarReserva);
router.delete('/:id', ReservaController.removerReserva);

module.exports = router;