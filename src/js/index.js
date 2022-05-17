/*
 OBJETIVO 1 -> quando passar o mouse em cima do personagem
 temos que :
    colocar a classe selecionado no personagem que passamos em cima
    para adicionar animação nele.

    retirar a classe selecionado do personagem que estava
    selecionado.

 OBJETIVO 2 -> quando passar o mouse em cima trocar a
      IMAGEM E NOME DOS PERSONAGENS SELECIONADO

      - alterar a imagem do jogador 1
      - alterar o nome do jogador 1

*/

//  OBJETIVO 1

// querySelector busca todos os elementos com o nome indicado no ( ) e o . do .personagem indica que é uma classe. assim como
//  o # indicaria um id.

const personagens = document.querySelectorAll('.personagem')

// forEach = para cada.. para cada (personagens) dentro dessa lista const '.personagem' quero fazer uma função
//  => {  }

personagens.forEach((personagem) => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return; 

    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
    
       
        // OBJETIVO 2

      
      
    
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = `${nomeSelecionado}`
    })
})

// OUTRO METODO DE FAZER

// const homemDeFerro = document.getElementById('homem-de-ferro')
// const thor = document.getElementById('thor')
// const viuvaNegra = document.getElementById('viuva-negra')
// const ultron = document.getElementById('ultron')
// const hulk = document.getElementById('hulk')
// const capitaoAmerica = document.getElementById('capitao-america')
// const doutorDoom = document.getElementById('doutor-doom')
// const nova = document.getElementById('nova')
// const fenix = document.getElementById('fenix')

// homemDeFerro.addEventListener('mouseenter', () => {
//     homemDeFerro.classList.add('selecionado')
// })

// // thor.addEventListener('mouseenter', () => {
// //     thor.classList.add('selecionado')
// // })

// viuvaNegra.addEventListener('mouseenter', () => {
//     viuvaNegra.classList.add('selecionado')
// })

// ultron.addEventListener('mouseenter', ()=> {
//     ultron.classList.add('selecionado')
// })

// hulk.addEventListener('mouseenter', () =>{
//     hulk.classList.add('selecionado')
// })

// capitaoAmerica.addEventListener('mouseenter', () => {
//     capitaoAmerica.classList.add('selecionado')
// })

// doutorDoom.addEventListener('mouseenter', () => {
//     doutorDoom.classList.add('selecionado')
// })

// nova.addEventListener('mouseenter', () => {
//     nova.classList.add('selecionado')
// })

// fenix.addEventListener('mouseenter', () => {
//     fenix.classList.add('selecionado')
// })



