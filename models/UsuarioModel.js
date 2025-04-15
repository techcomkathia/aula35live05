const sequelize = require('./banco') // importando o sequelize do arquivo conexaoBanco.js

const { DataTypes } = require('sequelize')

//definição do modelo usuario
const Usuario = sequelize.define(
    'usuarios',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        senha:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        criado_em:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }
)

module.exports = Usuario