// sacar id de la url
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id")) 

// buscar el capítulo con ese id
const capitulo = comic.capitulos.find(capitulos => capitulos.id === id)

// seleccionar secciones donde va la info
const sec1 = document.querySelector(".sec1")
const sec2 = document.querySelector(".sec2")

// poner el header con flecha y nombre del capítulo
sec1.innerHTML =`
    <header class = "cabeza">
      <a href="./indexx.html">
      <img class="flecha" src="./assets/flecha.png" alt="">
      </a>
      <h2>${capitulo.nombreCap}</h2>
    </header>
`

// poner el video del capítulo
sec2.innerHTML =`
 <video class= "video" controls src="${capitulo.video}"></video>
`