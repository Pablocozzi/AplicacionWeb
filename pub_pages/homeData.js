import { cardComponent } from "./cardCategorias.js";

let cardContainer = document.getElementById('cardContainer');

const fetchProductos = async () => {
    try {
        const response = await fetch('./data.json'); 
        const data = await response.json();
        
        const idsPermitidos = [1, 5, 12]; 
        const Filtrados = data.filter(producto => idsPermitidos.includes(producto.id));

        const cards = Filtrados.map(libro => cardComponent(libro)).join('');
        cardContainer.innerHTML = cards;
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
};

window.addEventListener('load', fetchProductos);