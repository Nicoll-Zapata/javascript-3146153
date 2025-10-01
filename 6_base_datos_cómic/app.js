// sacar id de la url
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))

// contenedor de capítulos
const contenedor = document.querySelector(".contenedorCaps")

// recorrer capítulos
comic.capitulos.forEach(cap => {
  let capDiv = document.createElement("div");

// si es el capítulo actual  
  if (cap.id === id) {
    capDiv.className = "cap-1 capsH";
    capDiv.style.backgroundImage = `url(${cap.imgCapitulo})`;
    capDiv.innerHTML = `
      <div class="contenedorData">
        <h2>Capítulo ${cap.id}</h2>
        <h1>${cap.nombreCap}</h1>
        <p>${cap.descripcion}</p>
        <a href="./video.html?id=${cap.id}" class="BTN">
          <img class="play" src="./assets/play.png" alt="">
          Play
        </a>
        <div class="barra"></div>
      </div>
    `;
  
   // si no es el capítulo actual  
  } else {
    let clase = cap.id === 1 ? `cap-${id}` : `cap-${cap.id}`;
    capDiv.className = `${clase} capsH opHcaps`;
    capDiv.style.backgroundImage = `url(${cap.imgCapitulo})`;
    capDiv.innerHTML = `<h2>Capítulo ${cap.id}</h2>`;
  }

  // agregar al contenedor
  contenedor.appendChild(capDiv);
});
