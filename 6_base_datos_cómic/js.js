// banner principal
const imagenBn = document.querySelector('#imagen')
imagenBn.innerHTML = `<div id=banner class="textos"></div>
<img class="imagenRTwo" src="${comic.bgBanner}"  alt="">`

// texto del banner (nombre + descripción)
const banner = document.querySelector('#banner')
banner.innerHTML = `
<h1>${comic.nombreComic}</h1>
<p>${comic.descripcion}</p>`

// título y contenedor de capítulos
const cap = document.querySelector('#cap')
cap.innerHTML = `<h2>Episodios</h2>
<div id=contCP class="episodios-img"></div>`

// lista de capítulos
const contCP = document.querySelector('#contCP')

comic.capitulos.forEach(cap => {
    const div = document.createElement("div")
    div.classList.add('episodio')

// cada capítulo con link, imagen y nombre
    div.innerHTML = `
    <a href="./indexx.html?id=${cap.id}" style="color: white;
               display: flex;
               flex-direction: column;
               gap: 4vh;">
        <img src="${cap.imgPortada}" class="imagenR">
        <h3>${cap.nombreCap}</h3>
        </a> `
    
    contCP.appendChild(div)
});


// footer
const footer = document.querySelector('#footer')

footer.innerHTML = `<h2>FAQ | PRIVACY POLICY | TERMS OF SERVICE | CONTACT US</h2>
<div id=final class="logos"></div>`
