const cardComponent = (data) => {
    return `

        <div class="card mb-3 mx-auto" style="max-width: 90%;">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${data.imagen}" class="img-fluid rounded-start" alt="${data.titulo}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.titulo}</h5>
                        <h6 class="card-text">${data.autor}</h6>
                        <h7>Categoria: ${data.categoria}</h3>
                        <p class="card-text">${data.info}</p>
                    </div>
                </div>
            </div>            
        </div>
    `;
};

let cardContainer = document.getElementById('cardContainer');
let productos = [];

const fetchProductos = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        
        // Filtrar los productos por categorías
        const categorias = ["Cocina", "Deportes", "Ciencia ficcion"];
        
        // Crear un contenedor para las categorías
        const categoriesContainer = document.getElementById('categoriesContainer');
        categoriesContainer.innerHTML = categorias.map(categoria => 
            `<button class="btn btn-outline-primary category-btn" data-category="${categoria}">${categoria}</button>`
        ).join('');

        // Mostrar productos al cargar la página
        const productosPorCategoria = categorias.map(categoria => {
            const productosFiltrados = data.filter(producto => producto.categoria === categoria);
            return { categoria, productos: productosFiltrados.slice(0, 4) };  // Mostrar solo los primeros 4 productos por categoría
        });

        // Generar las cards de productos para cada categoría
        let cardsHtml = '';
        productosPorCategoria.forEach(categoria => {
            cardsHtml += `
                <div class="category-section">
                    <div class="row">
                        ${categoria.productos.map(libro => cardComponent(libro, false)).join('')}
                    </div>
                </div>
            `;
        });

        cardContainer.innerHTML = cardsHtml;

        // Manejo de botones de categoría para filtrar productos
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedCategory = event.target.dataset.category;
                filterProductsByCategory(selectedCategory, data);
            });
        });

    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
};

// Función para filtrar productos por categoría
function filterProductsByCategory(category, allProducts) {
    const filteredProducts = allProducts.filter(product => product.categoria === category);
    const cards = filteredProducts.map(libro => cardComponent(libro, false)).join('');
    cardContainer.innerHTML = cards;
}

window.addEventListener('load', fetchProductos);