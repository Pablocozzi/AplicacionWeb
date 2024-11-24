import { cardComponent } from "../componentes/cardCategorias.js";

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

        const buttons = document.querySelectorAll('.btn-add-cart');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const { id, titulo, precio } = button.dataset;
                const quantityInput = document.getElementById(`quantity-${id}`);
                const quantity = parseInt(quantityInput.value) || 1;
                addToCart(Number(id), titulo, Number(precio), quantity);
            });
        });
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }

function addToCart(id, titulo, precio, cantidad) {
        if (!id || !titulo || !precio || cantidad < 1) {
            console.error('Datos inválidos para agregar al carrito:', { id, titulo, precio, cantidad });
            return;
        }
    
        const cart = JSON.parse(localStorage.getItem('cart')) || []; 
        const existingProductIndex = cart.findIndex(product => product.id === id);
    
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].cantidad += cantidad;
        } else {

            const product = { id, titulo, precio, cantidad }; 
            cart.push(product); 
        }
    
        localStorage.setItem('cart', JSON.stringify(cart)); 
        alert(`"${titulo}" añadido al carrito. Cantidad: ${cantidad}`);
    }
    
};

window.addEventListener('load', fetchProductos);