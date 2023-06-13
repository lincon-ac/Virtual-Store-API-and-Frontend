const Sequelize = require('sequelize');
const database = require('../db/db');

const Produto = database.define('produto', {
  id_produto: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco:{
    type: Sequelize.STRING,
    allowNull:false
  },
  link:{
    type: Sequelize.STRING,
    allowNull:false
  }
}, {database,modelname:'produto',tableName: 'produtos'})
module.exports = Produto;
