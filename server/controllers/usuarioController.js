const { where } = require("sequelize")
const UsuarioModel = require("../models/despesa")

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.Usuario.findAll()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
}

const createUsuario = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ error: "Os campos 'email' e 'senha' são obrigatórios." });
    }
    try {
          
        const newUsuario = await UsuarioModel.Usuario.create({ email, senha })
        res.status(201).json(newUsuario)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createUsuario,
    getUsuarios 
}