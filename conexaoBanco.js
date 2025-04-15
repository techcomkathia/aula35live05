const sequelize = require('./banco')

sequelize.authenticate()// método assíncrono para conectar ao banco
    .then(() => console.log('sucesso ao conectar ao banco'))
    .then(() => {
                    sequelize.sync()
                    console.log('Tabelas sincronizadas com sucesso')
                }) // sincronizando todas as tabelas
    .catch(err => console.log('Não foi possível conectar ao banco', err))
