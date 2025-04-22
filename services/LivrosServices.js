const express = require('express')
const app = express()
const LivrosModel = require('../models/LivrosModel')

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

function getLivros(req, res){
    //buscar todos os livros

    LivrosModel.findAll()
        .then(livros => {
            res.status(200).json({
                status: 200,
                dados: livros
            })
        })
        .catch(erro => {
            res.json({
                status: 500,
                message: erro
            })
        })
}

async function postLivro(req, res) {
    const {titulo, isbn, preco, publicado_em, estoque, categoria_id, autor_id} = req.body

    try{
        //verificar se o livro existe
        const livroPesquisa = await LivrosModel.findOne({where:{titulo:titulo}})

        //se o livro não existir, verificar se todos os campos foram preenchidos, se todos forem preenchidos, criar o livro
        if(!livroPesquisa){
            const livroCriado = await LivrosModel.create(
                {
                    titulo:titulo,
                    isbn:isbn, preco:preco,
                    publicado_em:publicado_em,
                    estoque:estoque,
                    categoria_id:categoria_id,
                    autor_id:autor_id
                }
            )

            res.json({
                status: 200,
                dadosCriados: livroCriado
            })
        }
        else{
            res.json({
                status: 400,
                message: 'Livro ja cadastrado'
            })
        }        //caso contrário, retornar uma mensagem de erro

        
    }
    catch(erro){
        res.status(500).json(
            {
                message: erro,
                status: 500,
                erro: 'Erro ao criar o livro'
            }
        )
    }
}



module.exports = {
    getLivros,
    postLivro
}