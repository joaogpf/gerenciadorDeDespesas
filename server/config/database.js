require('dotenv').config();
const { Sequelize }  = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

// Testar a conexão
sequelize.authenticate()
  .then(() => console.log('Conexão com MySQL bem-sucedida! 🚀'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;