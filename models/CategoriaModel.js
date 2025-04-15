const sequelize = require('../banco')
const {DataTypes} = require('sequelize')

const Categoria = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    descricao:{
        type: DataTypes.TEXT,
    }
})

module.exports = Categoria