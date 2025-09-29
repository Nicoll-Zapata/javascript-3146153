console.log(comic);
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id")) || 1

const contenedor = document.querySelector(".contenedorCaps")

comic.capitulos.forEach(cap => {
  let capDiv = document.createElement("div");

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
        <div class="barra"><div></div></div>
      </div>
    `;
  } else {
    let clase = cap.id === 1 ? `cap-${id}` : `cap-${cap.id}`;
    capDiv.className = `${clase} capsH opHcaps`;
    capDiv.style.backgroundImage = `url(${cap.imgCapitulo})`;
    capDiv.innerHTML = `<h2>Capítulo ${cap.id}</h2>`;
  }

  contenedor.appendChild(capDiv);
});
