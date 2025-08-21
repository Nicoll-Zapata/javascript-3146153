const grillos = document.querySelectorAll (".grin")
const manzanas = document.querySelectorAll (".apple")
const contadorgrillos = document.querySelector("#contador-grillos")
const contadormanzanas = document.querySelector("#contador-manzanas")
const play = document.querySelector ("#play")
const stop = document.querySelector ("#stop")
const audiofondo = document.querySelector ("#audio-fondo")
const audioGrillos = document.querySelector   ("#audio-grillos")
const playGrillos = document.querySelector ("#play-grillo")
const audioSol = document.querySelector ("#audio-sol")
const audioManzana = document.querySelector ("#audio-manzana")
const playManzanas = document.querySelector ("#play-manzana")
let totalgrillos = 0
let totalmanzanas = 0


grillos.forEach(function(grillo){
   
    grillo.addEventListener( 'click', function () {
        grillo.classList.add('desaparecer')
        totalgrillos++
        contadorgrillos.textContent= totalgrillos    

    } )
} )

manzanas.forEach(function(manzana){
    manzana.addEventListener( 'click', function () {
        manzana.classList.add('desaparecer')
        totalmanzanas++
        contadormanzanas.textContent= totalmanzanas

    } )
})

const sol = document.querySelector('#misol'); 
sol.style.transition = 'transform .35s ease';

sol.addEventListener('mouseenter', () => {
  sol.style.transform = 'translateY(-90px) scale(1.5)';
});

sol.addEventListener('mouseleave', () => {
  sol.style.transform = 'translateY(-90px) scale(1)';
});

function reproducirFondo () {
    audiofondo.play()
}

play.addEventListener ("click", reproducirFondo)


function pausarFondo () {
    audiofondo.pause()
}

stop.addEventListener ("click", pausarFondo)

function sonidoGrillos () {
    audioGrillos.play()
    
}

playGrillos.addEventListener ("click", sonidoGrillos)

function reproducirSol () {
    audioSol.play()
}
sol.addEventListener ("click", reproducirSol)

/* function pausarSol () {
    audioSol.pause()
}

sol.addEventListener ("click", pausarSol) */   

function sonidoManzana () {
    audioManzana.play ()
}

playManzanas.addEventListener ("click", sonidoManzana )




const prev = document.querySelector(".prev")
const next = document.querySelector (".next")
const escena1= document.querySelector (".escena-1")
const escena2= document.querySelector (".escena-2")
const escena3= document.querySelector (".escena-3")

let i = 1

next.addEventListener("click", function () {
    if(i === 1){
        escena1.classList.add("d-none")
        escena2.classList.remove("d-none")
        i++
    }else if(i == 2){
        escena2.classList.add("d-none")
        escena3.classList.remove("d-none")
        i++
    }
})