"use strict";

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
//------------------------------

// Para aumentar o tamanho da fonte
const range = document.querySelector('.range1');
const fontModification = document.querySelector('.fontModification');
range.addEventListener('input', function() {
    console.log('entrou');
    const rangeValue = range.value;
    fontModification.style.fontSize = rangeValue + 'px';
})