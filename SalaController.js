const SalaService = require('../services/SalaService');

const criarSala = async (req, res) => {
    try {
        const sala = await SalaService.criarSala(req.body);
        res.status(201).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const listarSalas = async (req, res) => {
    try {
        const salas = await SalaService.listarSalas(req.query);
        res.status(200).json(salas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const detalharSala = async (req, res) => {
    try {
        const sala = await SalaService.detalharSala(req.params.id);
        if (!sala) {
            return res.status(404).json({ error: 'Sala não encontrada' });
        }
        res.status(200).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const atualizarSala = async (req, res) => {
    try {
        const sala = await SalaService.atualizarSala(req.params.id, req.body);
        if (!sala) {
            return res.status(404).json({ error: 'Sala não encontrada' });
        }
        res.status(200).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const removerSala = async (req, res) => {
    try {
        const removida = await SalaService.removerSala(req.params.id);
        if (!removida) {
            return res.status(404).json({ error: 'Sala não encontrada' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { criarSala, listarSalas, detalharSala, atualizarSala, removerSala };