const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    salaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala', required: true },
    inicio: { type: Date, required: true },
    fim: { type: Date, required: true },
    usuario: { type: String, required: true },
});

module.exports = mongoose.model('Reserva', ReservaSchema);