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
    <a href="" style="color: white;
               display: flex;
               flex-direction: column;
               gap: 2vh;">
        <img src="${cap.imgPortada}" class="imagenR">
        <h3>${cap.nombreCap}</h3>
    <p>${cap.descripcion}</p></a> `
    
    contCP.appendChild(div)
});



const footer = document.querySelector('#footer')

footer.innerHTML = `<h2>FAQ | PRIVACY POLICY | TERMS OF SERVICE | CONTACT US</h2>
<div id=final class="logos"></div>`

const redes = document.querySelector("#redes")
redes.innerHTML 