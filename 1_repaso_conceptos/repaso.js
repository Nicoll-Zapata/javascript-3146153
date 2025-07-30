const pantalla = document.querySelector("#miImagen")
const btn1 = document.querySelector("#boton1")
const btn2 = document.querySelector("#boton2")
const btn3 = document.querySelector("#boton3")

function blancoynegro () {
    console.log("Imagen modificada")
    pantalla.style.filter = "grayscale(100%)"
    /* btn1.style.background = "blueviolet"
    btn1.style.color = "white"
    btn1.style.heigth = "200px"
    btn1.style.borderRadius = "50%" */
}

function desenfocar () {
    console.log("Imagen desenfocada")
    pantalla.style.filter = "blur(2px)"
}

function zoomyrotar () {
    console.log("Imagen zoom y rotar")
    pantalla.style.transform = "scale(90%) rotate(10deg)"
}

 
btn1.addEventListener("click", blancoynegro)

btn2.addEventListener("click", desenfocar)

btn3.addEventListener("click", zoomyrotar)

