const Sequelize = require('sequelize');
const database = require('../db/db');
const Usuario = database.define('usuario', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false,
  },
   email:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha:{
    type: Sequelize.STRING,
    allowNull:false
  }
}, {database,modelname:'usuario',tableName: 'usuarios'})
module.exports = Usuario;