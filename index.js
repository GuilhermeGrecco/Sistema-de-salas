const express = require('express');
const salaRoutes = require('./salaRoutes');
const reservaRoutes = require('./reservaRoutes');

const router = express.Router();

router.use('/salas', salaRoutes);
router.use('/reservas', reservaRoutes);

module.exports = router;