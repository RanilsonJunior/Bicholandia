"use strict";

function teste() {
    alert('O icone de search foi clicado!')
}

// Script do SlidShow
var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .image');
var atual = 0;
var imagem = document.getElementById('atual');
var next = document.getElementById('next');
var back = document.getElementById('back');
var rolar = true;

for(let i = 0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for(let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
}

back.addEventListener('click', ()=> {
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', ()=> {
    atual++
    rolar = false
    slide()
})

function slide() {
    if(atual >= quant.length) {
        atual = 0
    }
    else if(atual < 0) {
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1200 * atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
},5000)
// --------------------------------------------------------

/*Código para subir ao topo da página*/ 
const toTop = document.querySelector('.subir');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { /*tamanho da página, quando chegar em 100 vai aparecer*/
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})
// -----------------------------------------------------------
//BTNS do menu 2
function abrir() {
    let btnMenu2numero1 = document.querySelector('.btn-menu2-numero1')
    let menu2Nunero1 = document.querySelector('.menu2-numero1')
    btnMenu2numero1.classList.toggle('ativo')
    menu2Nunero1.classList.toggle('ativo')
}

function acessibilidade() {
    let acessibilidade = document.querySelector('.acessibilidade')
    acessibilidade.classList.toggle('ativo')
}

//------------------------------------------------------------

// change font family Nunito Sans-Serif for button
function jetBrainsMono() {
    let body = document.querySelector('body');
    body.style.fontFamily = 'Nunito', sans-serif;
}

// change font family Tahoma for button
function tahoma() {
    let body = document.querySelector('body');
    body.style.fontFamily = 'Tahoma';
}

// change font family Open Dyslexic for button
function openDyslexic() {
    let body = document.querySelector('body');
    body.style.fontFamily = 'OpenDyslexic-Regular';
}
//-----------------------------------------------------------

// Para aumentar o tamanho da fonte
const range = document.querySelector('.range1');
const fontModification = document.querySelector('.fontModification');
range.addEventListener('input', function() {
    const rangeValue = range.value;
    fontModification.style.fontSize = rangeValue + 'px';
})

//---------------------------------------------------------
// O submenu do "menu2-numero1"
// Cachorro
function menu2CachorroAbrir() {
    let menu2Cachorro = document.querySelector('.menu2-cachorro');
    menu2Cachorro.classList.add('ativo')
}

function menu2CachorroFechar() {
    let menu2Cachorro = document.querySelector('.menu2-cachorro');
    menu2Cachorro.classList.remove('ativo')
}

// Gato
function menu2GatoAbrir() {
    let menu2Gato = document.querySelector('.menu2-gato');
    menu2Gato.classList.add('ativo')
}

function menu2GatoFechar() {
    let menu2Gato = document.querySelector('.menu2-gato');
    menu2Gato.classList.remove('ativo')
}

// Coelho
function menu2CoelhoAbrir() {
    let menu2Coelho = document.querySelector('.menu2-coelho');
    menu2Coelho.classList.add('ativo')
}

function menu2CoelhoFechar() {
    let menu2Coelho = document.querySelector('.menu2-coelho');
    menu2Coelho.classList.remove('ativo')
}

// Brinquedo
function menu2BrinquedoAbrir() {
    let menu2Brinquedo = document.querySelector('.menu2-brinquedo');
    menu2Brinquedo.classList.add('ativo')
}

function menu2BrinquedoFechar() {
    let menu2Brinquedo = document.querySelector('.menu2-brinquedo');
    menu2Brinquedo.classList.remove('ativo')
}

//------------------------------------------------------------