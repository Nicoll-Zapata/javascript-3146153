
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})


const escenas = document.querySelectorAll('.escena')
const btnAnterior = document.querySelector('.anterior')
const btnSiguiente = document.querySelector('.siguiente')
const miniaturas = document.querySelectorAll('.miniaturas img')
let indice = 0

/* console.log(escenas) */
/* console.log(escenas[1]) */

function mostrarEscena(i){
    /* console.log(escenas[i]) */
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa")
    }

    escenas[i].classList.add("activa")
    indice = i
}


btnSiguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escenas.length){
        indice = 0
    }
    mostrarEscena(indice)
    audio1.pause()
    audio2.pause()
    audio3.pause()
})

btnAnterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){
        indice = escenas.length - 1
    }
    mostrarEscena(indice)
    audio1.pause()
    audio2.pause()
    audio3.pause()
})

miniaturas.forEach( (miniatura, i) => {
    miniatura.addEventListener("click", function(){
        mostrarEscena(i)
    })
});


const audio1 = document.querySelector("#audio-1")
const audio2 = document.querySelector("#audio-2")
const audio3 = document.querySelector("#audio-3")
const play1 = document.querySelector("#play1")
const play2 = document.querySelector("#play2")
const play3 = document.querySelector("#play3")
const stop1 = document.querySelector("#stop1")
const stop2 = document.querySelector("#stop2")
const stop3 = document.querySelector("#stop3")

function reproducirAudio1 () {
    audio1.play()
}

play1.addEventListener ("click", reproducirAudio1)


function pausarAudio1 () {
    audio1.pause()
}

stop1.addEventListener ("click", pausarAudio1)


function reproducirAudio2 () {
    audio2.play()
}

play2.addEventListener ("click", reproducirAudio2)


function pausarAudio2 () {
    audio2.pause()
}

stop2.addEventListener ("click", pausarAudio2)

function reproducirAudio3 () {
    audio3.play()
}

play3.addEventListener ("click", reproducirAudio3)


function pausarAudio3 () {
    audio3.pause()
}

stop3.addEventListener ("click", pausarAudio3)




