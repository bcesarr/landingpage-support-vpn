// Evento para Abrir e Fechar um Menu na Versão Mobile

// Criando uma variavel e colocando pra ela uma função de documento, mandando pegar o elemento do id sitado, lá no HTML (No caso, open-menu-button)
let botaoAbrirMenu = document.getElementById('open-menu-button')

// Fazendo a mesma coisa do código acima, aqui
let mobileMenu = document.getElementById('mobile-menu')

let overlay = document.getElementById('overlay-menu')

// Criando uma função de evento; damos o nome do evento de "click"; criamos uma arrow function e dentro dela, digo o que irá acontecer toda vez que clicarem no botão.
botaoAbrirMenu.addEventListener('click', () => {
    // Está função irá criar uma classe toda vez que clicarem no botão (está classe não pode existir dentro do CSS, por que ele criara dinamicamente)
    mobileMenu.classList.add('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu
mobileMenu.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão, toda vez que clicarem no botão para fechar
    mobileMenu.classList.remove('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu ao clicar na tela fora do menu
overlay-menu.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão ou na tela fora do menu
    mobileMenu.classList.remove('abrir-menu')
})