const sequelize = require('./banco') // importando o sequelize do arquivo conexaoBanco.js

const { DataTypes } = require('sequelize')

//definição do modelo autor

const Autor = sequelize.define(
    'autores', 
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
        nacionalidade:{
            type: DataTypes.STRING(50)
        }    
    }
)

//sincronizar o modelo com o banco de dados


module.exports = Autor