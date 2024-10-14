import { cardComponent } from "./cardHome.js";


let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {
        imagen: "../Images/la-biblia-de-los-caidos.jpg", 
        titulo: 'La Biblia de los Caídos', 
        autor: "de Fernando Trujillo.", 
        categoria: "Ciencia Ficcion"
    },
    {
        imagen: "../Images/el-mundial-de-messi-y-de-la-argentina-de-scaloni.jpg", 
        titulo: 'EL MUNDIAL DE MESSI y de la Argentina de Scaloni', 
        autor: "de Alejandro Wall, Gastón Edul.", 
        categoria: "Deportes"
    },
    {
        imagen: "../Images/rafa-roger.jpg", 
        titulo: 'Rafa & Roger', 
        autor: "de Antonio Arenas, Rafael Plaza", 
        categoria: "Deportes"
    },
]


window.addEventListener('load', ()=>{

    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')


    cardContainer.innerHTML = cards

})