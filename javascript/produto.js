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
const fontModification1 = document.querySelector('.fontModification1');
const fontModification2 = document.querySelector('.fontModification2');
const fontModification3 = document.querySelector('.fontModification3');
const fontModification4 = document.querySelector('.fontModification4');
range.addEventListener('input', function() {
    const rangeValue = range.value;
    fontModification1.style.fontSize = rangeValue + 'px';
    fontModification2.style.fontSize = rangeValue + 'px';
    fontModification3.style.fontSize = rangeValue + 'px';
    fontModification4.style.fontSize = rangeValue + 'px';
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

//------------------------------------------------------------------

let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

	for (var i=0; i < thumbnails.length; i++){
        
        thumbnails[i].addEventListener('mouseover', function(){
		    console.log(activeImages)
			if (activeImages.length > 0){
				
                activeImages[0].classList.remove('active')
				}
				
                this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}


		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');

		buttonLeft.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft -= 180
		})

		buttonRight.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft += 180
		})

//----------------------------------------------------------------------- 
// Accordion
const accordion = document.getElementsByClassName('contentBx')

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    }) 
}

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