const imagenBn = document.querySelector('#imagen')
imagenBn.innerHTML = `<div id=banner class="textos"></div>
<img class="imagenRTwo" src="${comic.bgBanner}"  alt="">`

const banner = document.querySelector('#banner')
banner.innerHTML = `
<h1>${comic.nombreComic}</h1>
<p>${comic.descripcion}</p>`

const cap = document.querySelector('#cap')
cap.innerHTML = `<h2>Episodios</h2>
<div id=contCP class="episodios-img"></div>`

const contCP = document.querySelector('#contCP')

comic.capitulos.forEach(cap => {
    const div = document.createElement("div")
    div.classList.add('episodio')
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



const footer = document.querySelector('#footer')

footer.innerHTML = `<h2>FAQ | PRIVACY POLICY | TERMS OF SERVICE | CONTACT US</h2>
<div id=final class="logos"></div>`

const redes = document.querySelector("#redes")
redes.innerHTML 

const contenedor = document.querySelector(".contenedorCaps")

comic.capitulos.forEach(cap => {
    let capDiv = document.createElement("a")
    capDiv.href = `index.html?id=${cap.id}`
    capDiv.classList.add("cap", "capsH", "opHcaps")
    capDiv.style.backgroundImage = `url(${cap.imgCapitulo})`
    capDiv.style.backgroundSize = "cover"

    capDiv.innerHTML =`
    <h2>${cap.Cap}</h2> `;
    
    contenedor.appendChild(capDiv)
});