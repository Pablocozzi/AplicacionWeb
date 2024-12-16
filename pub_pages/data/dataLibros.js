import { cardComponent } from "../../componentes/cardCategorias.js";


let cardContainer = document.getElementById('cardContainer');

const fetchProductos = async () => {
    try {
        const response = await fetch('../../pub_pages/data/data.json'); 
        const data = await response.json();

        // Guardar los productos en el localStorage para que siempre estén disponibles
        localStorage.setItem('productos', JSON.stringify(data));

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
};

function addToCart(id, titulo, precio, cantidad) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        alert('Producto no encontrado.');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(product => product.id === id);
    const existingProduct = existingProductIndex !== -1 ? cart[existingProductIndex] : null;
    const quantityInCart = existingProduct ? existingProduct.cantidad : 0;

    // Calcular la cantidad máxima que se puede agregar
    const maxQuantity = Math.min(producto.stock - quantityInCart, producto.stock);  // No puede superar el stock disponible ni el límite de 10

    // Verificar que la cantidad no exceda el máximo permitido
    if (cantidad > maxQuantity) {
        alert(`No puedes agregar más de ${maxQuantity} unidad${maxQuantity > 1 ? 'es' : ''} de este producto.`);
        return;
    }

    // Si el producto ya está en el carrito, se suman las cantidades
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].cantidad += cantidad;
    } else {
        // Si el producto no está en el carrito, lo agregamos
        cart.push({ id, titulo, precio, cantidad });
    }

    // Actualizar el carrito en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el stock del producto en el localStorage
    producto.stock -= cantidad;
    localStorage.setItem('productos', JSON.stringify(productos));

    alert(`"${titulo}" añadido al carrito. Cantidad: ${cantidad}`);

    fetchProductos();  // Recargar los productos para mostrar el stock actualizado
}

window.addEventListener('load', fetchProductos);


