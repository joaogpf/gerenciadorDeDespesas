const express = require('express')
const { getUsuarios, createUsuario } = require("../controllers/usuarioController")

const routerUsuario = express.Router()

routerUsuario.get("/", getUsuarios)

routerUsuario.post("/", createUsuario)
module.exports = routerUsuario