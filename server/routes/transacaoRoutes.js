const express = require('express')
const { getTransacoes, createTransacao, getTransacoesById } = require("../controllers/transacaoController")

const routerTransacao = express.Router()

routerTransacao.get("/", getTransacoes)

routerTransacao.get("/:usuario", getTransacoesById)

routerTransacao.post("/", createTransacao)


module.exports = routerTransacao