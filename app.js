'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

function produtosCard(produtos){
    const container = document.getElementById('container')
    const div = document.createElement('div')

    const imagem = document.createElement('img')
    const nome = document.createElement('h1')
    const descricao = document.createElement('p')
    const preco = document.createElement('h2')
    const categoria = document.createElement('span')
    // const classificacao = document.getElementById('')

    imagem.src = `./img/${produtos.imagem}`

    nome.textContent = produtos.nome
    descricao.textContent = produtos.descricao
    preco.textContent = `R$ ${produtos.preco}`
    categoria.textContent = produtos.categoria

    div.appendChild(imagem)
    div.appendChild(nome)
    div.appendChild(descricao)
    div.appendChild(preco)
    div.appendChild(categoria)

    container.appendChild(div)

}

function carregarProdutos(){
    produtos.forEach(produtosCard)
}

carregarProdutos()