const {Sequelize} = require('sequelize')

// instancia do sequelize
const sequelize = new Sequelize('livrariaLive05', 'root', 'km2015km', {
    host: 'localhost', //local do banco (localhost)
    dialect: 'mysql' // SGBD do banco
})


module.exports = sequelize