const options = {
    dragging: false,
    trouchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-27.2196028,-49.647076], 16);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", //caminho está sendo chamado do html, dentro da pasta root
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add a popup
L.marker([-27.2196028,-49.647076], { icon })
    .addTo(map);



// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach((button) => {button.classList.remove("active")})

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem (imagem principal)
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add('active')
}
