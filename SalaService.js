const Sala = require('../models/Sala');

const criarSala = async (dados) => {
    return await Sala.create(dados);
};

const listarSalas = async (filtros) => {
    const query = {};
    if (filtros.capacidade) {
        query.capacidade = { $gte: filtros.capacidade };
    }
    if (filtros.recursos) {
        query.recursos = { $all: filtros.recursos.split(',') };
    }
    return await Sala.find(query);
};

const detalharSala = async (id) => {
    return await Sala.findById(id);
};

const atualizarSala = async (id, dados) => {
    return await Sala.findByIdAndUpdate(id, dados, { new: true });
};

const removerSala = async (id) => {
    return await Sala.findByIdAndDelete(id);
};

module.exports = { criarSala, listarSalas, detalharSala, atualizarSala, removerSala };