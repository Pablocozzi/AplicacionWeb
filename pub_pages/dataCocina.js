import { cardComponent } from "./cardCategorias.js";


let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {
        imagen: "../Images//portada_cocinen-ustedes_paulina-cocina_202309100049.jpg", 
        titulo: 'Cocinen ustedes', 
        autor: "de Paulina Cocina.", 
        info: "Este no es solo un libro de recetas para niños y niñas. Es también un libro en cuyo armado participaron una niña y un niño que cocinan: mis hijos. ",
        paginas: 192,
        precio: 2700
    },
    {
        imagen: "../Images/381926_portada_la-revolucion-de-la-glucosa-el-metodo_jessie-inchauspe_202305111308.jpg", 
        titulo: 'La revolución de la glucosa: el Método', 
        autor: "de Jessie Inchauspé.", 
        info: "Cuatro semanas y 100 recetas para deshacerte de los antojos, recuperar tu energía y sentirte increíble.",
        paginas: 288,
        precio: 3900
    },{
        imagen: "../Images/portada_julieta-oriolo-cocina-italiana_julieta-oriolo_202207140220.jpg", 
        titulo: 'Cocina italiana', 
        autor: "de Julieta Oriolo.", 
        info: "En una época donde todo parece apurado y superficial, Cocina italiana nos conecta con lo profundo, con el trabajo manual y la atención a los cinco sentidos. <br> Amasar un domingo de otoño, invitar amigos, hacer una salsita rica y disfrutar de un almuerzo al abrigo del sol.",
        paginas: 272,
        precio: 3750
    },{
        imagen: "../Images/portada_pan-de-campo_german-torres_202208191646.jpg", 
        titulo: 'Pan de campo', 
        autor: "de Germán Torres.", 
        info: "Recetas sencillas pero diferentes, repensadas, y sobre todo, interpretadas.",
        paginas: 256,
        precio: 3680
    },
]


window.addEventListener('load', ()=>{

    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')


    cardContainer.innerHTML = cards

})

