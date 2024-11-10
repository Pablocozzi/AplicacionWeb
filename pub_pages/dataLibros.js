import { cardComponent } from "./cardCategorias.js";

let cardContainer = document.getElementById('cardContainer');

const fetchProductos = async () => {
    try {
        const response = await fetch('./data.json'); 
        const data = await response.json();

        const pageNameInput = document.getElementById('pageName');
        const categoria = pageNameInput ? pageNameInput.value : '';
        
        const libros = data.filter(libro => libro.categoria === categoria);

        const cards = libros.map(libro => cardComponent(libro)).join('');
        cardContainer.innerHTML = cards;
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
};

window.addEventListener('load', fetchProductos);