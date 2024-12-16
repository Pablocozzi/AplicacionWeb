export const cardComponent = (data) => {
    const isOutOfStock = data.stock === 0;

    // Cargar el carrito desde localStorage para obtener las cantidades actuales
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(product => product.id === data.id);
    const quantityInCart = existingProduct ? existingProduct.cantidad : 0;

    // Calcular el máximo que se puede agregar
    const maxQuantity = Math.min(data.stock - quantityInCart, data.stock); // No puede superar el stock disponible ni el límite de 10

    // Si no hay más unidades para agregar
    const isMaxQuantityReached = maxQuantity === 0;

    return `
        <div class="card mb-3 mx-auto" style="max-width: 90%;">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${data.imagen}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.titulo}</h5>
                        <h6 class="card-text">${data.autor}</h6>
                        <p class="card-text">${data.info}</p>
                        <p class="card-text">
                            <small class="text-body-secondary">Paginas del libro: ${data.paginas}</small> <br>
                            <small class="text-body-secondary ${isOutOfStock ? 'text-danger' : ''}">
                                Stock disponible: ${isOutOfStock ? 'Agotado' : data.stock}
                            </small>
                            <br>
                            <small class="text-body-secondary">
                                ${isMaxQuantityReached ? 'Producto agotado' : `Puedes agregar ${maxQuantity} unidad${maxQuantity > 1 ? 'es' : ''} mas.`}
                            </small> 
                        </p>
                        <div class="input-group">
                            <span class="input-group-text">$${data.precio} </span>
                            <input type="number" id="quantity-${data.id}" class="form-control quantity-input" max="${maxQuantity}" min="1" placeholder="1" value="1" ${isOutOfStock || isMaxQuantityReached ? 'disabled' : ''}>
                            <button 
                                class="btn btn-outline-secondary btn-add-cart" 
                                data-id="${data.id}" 
                                data-titulo="${data.titulo}" 
                                data-precio="${data.precio}" 
                                ${isOutOfStock || isMaxQuantityReached ? 'disabled' : ''}>
                                ${isMaxQuantityReached ? 'Agotado' : 'Agregar al carrito'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    `;
};