const express = require('express')
const sequelize = require('./config/database')
const routerUsuario = require("./routes/usuarioRoutes")
const routerTransacao = require("./routes/transacaoRoutes")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('servidor rodando')
})
app.use('/usuario', routerUsuario)
//app.post('/createUser', routerUsuario)

app.use('/transacao', routerTransacao)
//app.post('/newTransacao', routerTransacao)

//Iniciando servidor
const PORT = 3000

const startServer = async () => {
    try {
        
        await sequelize.sync()
        console.log("Banco de dados sincronizado!")

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados:", error)
    }
}

startServer()

