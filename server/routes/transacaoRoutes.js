const express = require('express')
const { getTransacoes, createTransacao, getTransacoesById, deleteTransacao, editTransacao } = require("../controllers/transacaoController")

const routerTransacao = express.Router()

routerTransacao.get("/", getTransacoes)

routerTransacao.get("/:usuario", getTransacoesById)

routerTransacao.post("/", createTransacao)

routerTransacao.delete("/:id_transacao", deleteTransacao)

routerTransacao.put("/:id_transacao", editTransacao)




module.exports = routerTransacao