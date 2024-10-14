import { cardComponent } from "./cardCategorias.js";


let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {
        imagen: "../Images/tres-1000-ejercicios-del-desarrollo-muscular-4.jpg", 
        titulo: 'Tres 1000 ejercicios del desarrollo muscular', 
        autor: "de Raquel Val Ferrer.", 
        info: "Esta obra, dividida en tres tomos, proporciona una amplia recopilación de ejercicios para potenciar el trabajo muscular desde una perspectiva del rendimiento y de la salud. Los ejercicios se organizan según materiales y grupos musculares.",
        paginas: 615,
        precio: 7100
    },
    {
        imagen: "../Images/triatlon-con-salud.jpg", 
        titulo: 'Triatlón con salud', 
        autor: "de Arturo Guede Seara.", 
        info: "Una mirada nueva y apasionada del triatlón desde la prevención. Aborda temas de gran interés para deportista, como el entrenamiento funcional y de fuerza, la recuperación después de la práctica deportiva, y la nutrición e hidratación más adecuadas para cada triatleta. Y, sobre todo, insiste en cómo disfrutar plenamente de este deporte.",
        paginas: 232,
        precio: 3500
    },{
        imagen: "../Images/rafa-roger.jpg", 
        titulo: 'Rafa & Roger', 
        autor: "de Antonio Arenas, Rafael Plaza.", 
        info: " Partiendo de la temporada 2017, el año que vio a la legendaria pareja de contrarios volver a gobernar el circuito con puño de hierro tras tiempo en un segundo plano, los autores recorren desde dentro las personalidades, los encuentros y desencuentros de Nadal y Federer, después de compartir durante años el día a día con ellos.",
        paginas: 313,
        precio: 4550
    },{
        imagen: "../Images/el-mundial-de-messi-y-de-la-argentina-de-scaloni.jpg", 
        titulo: 'EL MUNDIAL DE MESSI y de la Argentina de Scaloni', 
        autor: "de Alejandro Wall, Gastón Edul.", 
        info: "La historia de cómo Messi y Argentina ganaron la Copa del Mundo de Qatar.",
        paginas: 232,
        precio: 3600
    },
]


window.addEventListener('load', ()=>{

    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')


    cardContainer.innerHTML = cards

})