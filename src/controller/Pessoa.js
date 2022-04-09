const { EmptyResultError } = require('sequelize');
const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(req, res) {
        try {
            const pessoas = await Pessoa.findAll()
            return res.json(pessoas);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async getById(req, res) {
        try {
            const pessoas = await Pessoa.findAll({ where: { id: req.params.id } });
            return res.json(pessoas);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async store(req, res) {
        let data = req.body;
        try {
            const pessoas = await Pessoa.create(data);
            return res.json(pessoas);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async update(req, res) {
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
       let data = req.body;
        const id = req.params.id;
        try {
            await Pessoa.update(data, { where: { id: { [Op.eq]: id } } });
            return res.json({ msg: `Pessoa ${data.nome} atualizado com sucesso!` });
        } catch (error) {
            return res.json({ msg: `Pessoa ${data.nome} não foi atualizado` }, err);
        }
    },
    async delete(req, res) {
        try {
            await Pessoa.destroy({ where: { id: req.params.id } });
            return res.json({ msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!` });
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}