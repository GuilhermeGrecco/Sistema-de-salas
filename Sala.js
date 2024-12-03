const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    capacidade: { type: Number, required: true },
    recursos: [{ type: String }],
    status: { type: String, enum: ['A', 'I'], default: 'A' },
});

module.exports = mongoose.model('Sala', SalaSchema);