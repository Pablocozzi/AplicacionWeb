
export const cardComponent = (data) =>{

    return `
    <div class="col-md-4">
        <div class="card">
            <img src=${data.imagen} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.titulo}</h5>
                <p class="card-text">${data.autor}</p>
                <p class="card-text-categoria">Categoria: ${data.categoria}</p>
            </div>
        </div>
    </div>
        `
}