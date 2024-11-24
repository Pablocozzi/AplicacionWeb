

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cardContainer = document.getElementById('cardContainer');


    if (cart.length === 0) {
        cardContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }


    let cartHtml = '<ul class="list-group">';
    cart.forEach((product, index) => {
        cartHtml += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${product.titulo}</strong> - $${product.precio} x ${product.cantidad}
                    <small> - Total: $${product.precio * product.cantidad}</small>
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Eliminar</button>
            </li>
        `;
    });
    cartHtml += '</ul>';

    cardContainer.innerHTML = cartHtml;
}


window.removeFromCart = function(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(`Eliminando producto en índice ${index}`);
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    loadCart(); 
};
window.clearCart = function() {
    console.log('Vaciando carrito.');
    localStorage.removeItem('cart'); 
    loadCart(); 
};

window.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado.');
    loadCart();
});