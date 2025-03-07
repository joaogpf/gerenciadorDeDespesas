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

const verifyUsuario = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ error: "Os campos 'email' e 'senha' são obrigatórios." });
    }
    try {
        const usuario = await UsuarioModel.Usuario.findOne( {where: {
            
            email: email,
            senha: senha
        }
    })
        return res.status(201).json({
            message: "usuário logado com sucesso",
            token: usuario.toJSON().id_usuario
        })
  
       
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

const createUsuario = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ error: "Os campos 'email' e 'senha' são obrigatórios." });
    }
    try {
          
        const newUsuario = await UsuarioModel.Usuario.create({ email, senha })
        return res.status(201).json(newUsuario)
        console.log("Usuário cadastrado com sucesso!")
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createUsuario,
    getUsuarios,
    verifyUsuario
}