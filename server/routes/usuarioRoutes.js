const express = require('express')
const { getUsuarios, createUsuario, verifyUsuario } = require("../controllers/usuarioController")

const routerUsuario = express.Router()

routerUsuario.get("/", verifyUsuario) //login de usuário

routerUsuario.post("/", createUsuario) //cadastro de usuário
module.exports = routerUsuario