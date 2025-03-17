const express = require('express')
const { getTransacoes, createTransacao, getTransacoesById, deleteTransacao, editTransacao, filtrarTransacoes } = require("../controllers/transacaoController")

const routerTransacao = express.Router()

routerTransacao.get("/", getTransacoes)

routerTransacao.get("/:usuario", getTransacoesById)

routerTransacao.get("/:categoria_transacao", filtrarTransacoes)

routerTransacao.post("/", createTransacao)

routerTransacao.delete("/:id_transacao", deleteTransacao)

routerTransacao.put("/:id_transacao", editTransacao)




module.exports = routerTransacao