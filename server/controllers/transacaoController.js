const TransacoesModel = require("../models/despesa");

const getTransacoes = async (req, res) => {
    try {
        const transacoes = await TransacoesModel.Transacoes.findAll()
        res.status(200).json(transacoes)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createTransacao = async (req, res) => {
    try {
        const { nome_transacao, valor_transacao, categoria_transacao, data_transacao, metodo_transacao, usuario } = req.body
        const newTransacao = await TransacoesModel.Transacoes.create( { nome_transacao, valor_transacao, categoria_transacao, data_transacao, metodo_transacao, usuario } )
        res.status(201).json(newTransacao)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteTransacao = async (req, res) => {
    const { id_transacao } = req.params
    try {
        const transacaoExcluida = await TransacoesModel.Transacoes.destroy( {where: {
            id_transacao: id_transacao
        }
    })
        res.status(201).json(transacaoExcluida)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getTransacoesById = async (req, res) => {
    console.log(req.params)
    try {
        const { usuario } = req.params
        console.log(req.params)
        const transacoesUsuario = await TransacoesModel.Transacoes.findAll({
            where: {
                usuario: usuario
            }})
        res.status(201).json(transacoesUsuario)
        
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    getTransacoes,
    createTransacao,
    getTransacoesById,
    deleteTransacao
}