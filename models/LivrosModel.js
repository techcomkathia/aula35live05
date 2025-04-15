const sequelize = require('./banco') // importando o sequelize do arquivo conexaoBanco.js
const { DataTypes } = require('sequelize')
const Autor = require('./AutorModel')
const Categoria = require('./CategoriaModel')

const Livro = sequelize.define('livros', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    publicado_em:{
        type: DataTypes.DATE,
        allowNull: false
    },
    estoque:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Categoria,
            key: 'id'
        }
    }, //chave estrangeira
    autor_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Autor,
            key: 'id'
        }
    } //chave estrangeira
})


/* Relacionamentos
    Uma Categoria possui muitos Livros
        (1:N entre Categoria e Livro)
    Um Autor pode ter escrito vários Livros
        (1:N entre Autor e Livro)*/

Categoria.hasMany(Livro) //um para muitos
Autor.hasMany(Livro) //um para muitos
Livro.belongsTo(Categoria) //muitos para um
Livro.belongsTo(Autor) //muitos para um

module.exports = Livro