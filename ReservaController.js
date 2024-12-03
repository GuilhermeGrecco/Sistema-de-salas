const ReservaService = require('../services/ReservaService');

const criarReserva = async (req, res) => {
    try {
        const reserva = await ReservaService.criarReserva(req.body);
        res.status(201).json(reserva);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const listarReservas = async (req, res) => {
    try {
        const reservas = await ReservaService.listarReservas(req.query);
        res.status(200).json(reservas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const atualizarReserva = async (req, res) => {
    try {
        const reserva = await ReservaService.atualizarReserva(req.params.id, req.body);
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }
        res.status(200).json(reserva);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const removerReserva = async (req, res) => {
    try {
        const removida = await ReservaService.removerReserva(req.params.id);
        if (!removida) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { criarReserva, listarReservas, atualizarReserva, removerReserva };