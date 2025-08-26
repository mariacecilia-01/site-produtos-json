'use strict'

import produtos from "./produtos_atualizados.json" with {type: "json"}

function classificarProdutos(nota){

    switch(nota){
    case 1:
        return '★☆☆☆☆'
    case 2:
        return '★★☆☆☆'
    case 3:
        return '★★★☆☆'
    case 4:
        return '★★★★☆'
    case 5:
        return '★★★★★'
    default:
        return 'Sem avaliação'
    }
}

function exibirMensagem(produto){
    alert("Tem certeza que deseja comprar o produto: " + produto + "?")
}

function produtosCard(produtos){
    const container = document.getElementById('container')
    const div = document.createElement('div')

    const imagem = document.createElement('img')
    const nome = document.createElement('h1')
    const descricao = document.createElement('p')
    const preco = document.createElement('h2')
    const categoria = document.createElement('span')
    const classificacao = document.createElement('h3')
    const button = document.createElement('button')


    imagem.src = `./img/${produtos.imagem}`
    classificacao.textContent = classificarProdutos(produtos.classificacao)
    nome.textContent = produtos.nome
    descricao.textContent = produtos.descricao
    preco.textContent = `R$ ${produtos.preco}`
    categoria.textContent = produtos.categoria
    button.textContent = `COMPRAR`

    div.appendChild(imagem)
    div.appendChild(classificacao)
    div.appendChild(nome)
    div.appendChild(descricao)
    div.appendChild(preco)
    div.appendChild(categoria)
    div.appendChild(button)

    container.appendChild(div)

    button.onclick = () => exibirMensagem(produtos.nome)
}

function carregarProdutos(){
    produtos.forEach(produtosCard)
}

carregarProdutos()