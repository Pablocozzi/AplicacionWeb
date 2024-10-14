import { cardComponent } from "./cardCategorias.js";


let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {
        imagen: "../Images/la-biblia-de-los-caidos.jpg", 
        titulo: 'La Biblia de los Caídos', 
        autor: "de Fernando Trujillo.", 
        info: "El mundo cuenta con un lado oculto, una cara sobrenatural que nos susurra, que se intuye, pero que muy pocos perciben. La inmensa mayoría de las personas no es consciente de ese lado paranormal... ni de sus riesgos.",
        paginas: 422,
        precio: 5000
    },
    {
        imagen: "../Images/memorias-de-tierra-nueva-la-decima-eleccion.jpg", 
        titulo: 'Memorias de Tierra Nueva: La décima elección', 
        autor: "de Tulio Dávila.", 
        info: "Cada cien años gigantes, como las montañas más altas, cruzan el mar buscando devastar Tierra Nueva y, cada cien años, 12 guerreros, entre hombres y mujeres, son elegidos para combatirlos. Esta es la décima ocasión desde que los primeros héroes portaran las armas sagradas que la humanidad tendrá que hacer frente a aquel inminente peligro. Y todo parece indicar que será la peor de todas.",
        paginas: 643,
        precio: 7200
    },{
        imagen: "../Images/el-despertar-de-los-dragones-reyes-y-hechiceros-libro-1.jpg", 
        titulo: 'El Despertar de los Dragones', 
        autor: "de Morgan Rice.", 
        info: "«Si pensaste que ya no había razón para vivir después de terminar de leer la serie El anillo del hechicero, te equivocaste. En EL DESPERTAR DE LOS DRAGONES Morgan Rice nos presenta lo que promete ser otra brillante serie, sumergiéndonos en una fantasía de troles y dragones, de valor, honor, intrepidez, magia y fe en tu destino. Morgan ha logrado producir otro fuerte conjunto de personajes que nos hacen animarlos en cada página.…Recomendado para la biblioteca permanente de todos los lectores que aman la fantasía bien escrita».",
        paginas: 288,
        precio: 3800
    },{
        imagen: "../Images/sal-de-mis-suenos.jpg", 
        titulo: 'Sal de mis sueños', 
        autor: "de Fernando Trujillo.", 
        info: "Debe de haber millones de chicos como yo. Me volvía loco una compañera del instituto, tenía mis diferencias con mi padre y, siendo sincero, los estudios no eran precisamente mi prioridad. Un escenario bastante típico para un adolescente.",
        paginas: 246,
        precio: 3600
    },
]


window.addEventListener('load', ()=>{

    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')


    cardContainer.innerHTML = cards

})