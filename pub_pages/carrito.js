const cart = JSON.parse(localStorage.getItem('cart')) || [];
function loadCart() {



    const cardContainer = document.getElementById('cardContainer');

    if (cart.length === 0) {
        cardContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    let cartHtml = '<ul class="list-group">';
    cart.forEach((product, index) => {
        // console.log(`Producto ${index + 1}:`, product); 
        cartHtml += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${product.titulo}</strong> - $${product.precio} x ${product.cantidad}
                    <small>Total: $${product.precio * product.cantidad}</small>
                </div>
                <button id="Remove" class="btn btn-sm btn-danger">Eliminar</button>
            </li>
        `;
    });
    cartHtml += '</ul>';

    cardContainer.innerHTML = cartHtml;
}

//ver de funcion removefromcart, me deja eliminar solamente el primer elemento, no el que elijo

function removeFromCart(index) {

    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    loadCart(); 
}


function clearCart() {
    localStorage.removeItem('cart'); 
    loadCart(); 
}


window.addEventListener('DOMContentLoaded', () => {
    
    loadCart();
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    const Remove = document.getElementById('Remove');
    if (Remove) {
        Remove.addEventListener('click', removeFromCart);
    }
});