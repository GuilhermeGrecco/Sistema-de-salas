const Reserva = require('../models/Reserva');
const Sala = require('../models/Sala');

const criarReserva = async (dados) => {
    const sala = await Sala.findById(dados.salaId);
    if (!sala || sala.status === 'I') {
        throw new Error('Sala indisponível para reserva');
    }
    const conflito = await Reserva.findOne({
        salaId: dados.salaId,
        $or: [
            { inicio: { $lt: dados.fim, $gte: dados.inicio } },
            { fim: { $lte: dados.fim, $gt: dados.inicio } },
        ],
    });
    if (conflito) {
        throw new Error('Conflito de horários detectado');
    }
    return await Reserva.create(dados);
};

const listarReservas = async (filtros) => {
    const query = {};
    if (filtros.data) {
        query.inicio = { $gte: new Date(filtros.data) };
    }
    return await Reserva.find(query);
};

const atualizarReserva = async (id, dados) => {
    return await Reserva.findByIdAndUpdate(id, dados, { new: true });
};

const removerReserva = async (id) => {
    return await Reserva.findByIdAndDelete(id);
};

module.exports = { criarReserva, listarReservas, atualizarReserva, removerReserva };