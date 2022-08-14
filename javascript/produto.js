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

// change font family JetBrains Mono for button
function jetBrainsMono() {
    let body = document.querySelector('body');
    body.style.fontFamily = 'JetBrains Mono';
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