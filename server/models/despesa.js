const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Transacoes = sequelize.define('transacoes', {
    id_transacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    
    },

    nome_transacao: {
        type: DataTypes.STRING,
        allowNull: false
    },

    valor_transacao: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    categoria_transacao: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_transacao: {
        type: DataTypes.DATE,
        allowNull: false
    },

    metodo_transacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'transacoes',
    timestamps: false
})

const Usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})

Usuario.hasMany(Transacoes, {
    foreignKey: 'usuario',
    as: 'transacoes'
})
Transacoes.belongsTo(Usuario, {
    foreignKey: 'usuario',
    as: 'user'
})

//Exportando os modelos criados
module.exports = {
    Usuario,
    Transacoes
}