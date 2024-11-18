import { cardComponent } from "../componentes/cardCategorias.js";

let cardContainer = document.getElementById('cardContainer');

// function addToCart(id, titulo, precio) {
    
//     const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtiene el carrito actual o inicializa un array vacío
//     const product = { id, titulo, precio };

//     cart.push(product); // Agrega el producto al carrito
//     localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito actualizado en localStorage
//     alert(`Producto "${titulo}" añadido al carrito.`);
// }

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
    
        const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtiene el carrito actual
        const existingProductIndex = cart.findIndex(product => product.id === id);
    
        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            cart[existingProductIndex].cantidad += cantidad;
        } else {
            // Si el producto no está en el carrito, lo agrega
            const product = { id, titulo, precio, cantidad }; // Crea un objeto producto
            cart.push(product); // Agrega el producto al carrito
        }
    
        localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito actualizado
        alert(`"${titulo}" añadido al carrito. Cantidad: ${cantidad}`);
    }
    
};

window.addEventListener('load', fetchProductos);