// 1 Acessar Janela (Browser)
// 2 Pegar o HTML todo
// 3 Pegar Botão
// 4 Saber que está sendo clicado no botão

// 5 Acessar a janela 
// 6 Pegar o Html todo
// 5 Pegar o Elements
// 6 Mover o elements para direita

//

const btnRight = document.querySelector('.button-arrow._right')
const btnLeft = document.querySelector('.button-arrow._left')
const elements = document.querySelector('.elements')
let pixels = 100;

btnRight.addEventListener('click', function(){
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})