const TransacoesModel = require("../models/despesa");

const getTransacoes = async (req, res) => {
    try {
        const transacoes = await TransacoesModel.Transacoes.findAll()
        return res.status(200).json(transacoes)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createTransacao = async (req, res) => {
    try {
        const { nome_transacao, valor_transacao, categoria_transacao, data_transacao, metodo_transacao, usuario } = req.body
        const newTransacao = await TransacoesModel.Transacoes.create( { nome_transacao, valor_transacao, categoria_transacao, data_transacao, metodo_transacao, usuario } )
        return res.status(201).json(newTransacao)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const editTransacao = async (req, res) => {
    const { id_transacao } = req.params
    try {
        const { nome_transacao, valor_transacao, categoria_transacao, data_transacao, metodo_transacao} = req.body
        const transacaoEditada = await TransacoesModel.Transacoes.update(
            {   nome_transacao: nome_transacao,
                valor_transacao: valor_transacao,
                categoria_transacao: categoria_transacao,
                data_transacao: data_transacao,
                metodo_transacao: metodo_transacao
            }, { where: {id_transacao: id_transacao}})
            return res.status(201).json(transacaoEditada)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteTransacao = async (req, res) => {
    const { id_transacao } = req.params
    try {
        const transacaoExcluida = await TransacoesModel.Transacoes.destroy( {where: {
            id_transacao: id_transacao
        }
    })
        return res.status(201).json(transacaoExcluida)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getTransacoesById = async (req, res) => {
    console.log(req.params)
    try {
        const { usuario } = req.params
        console.log(req.params)
        const transacoesUsuario = await TransacoesModel.Transacoes.findAll({
            order: [["id_transacao", "DESC"]], // Ordena pelo ID do maior para o menor
            where: {
                usuario: usuario
            }})
        return res.status(201).json(transacoesUsuario)
        
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

module.exports = {
    getTransacoes,
    createTransacao,
    getTransacoesById,
    deleteTransacao,
    editTransacao
}