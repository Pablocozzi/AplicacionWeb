export const cardComponent = (data) =>{

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
                            <p class="card-text">
                                ${data.info}
                            <p class="card-text">
                                <small class="text-body-secondary">Paginas del libro: ${data.paginas}</small> <br>      
                            </p>
                            <div class="input-group">
                                <span class="input-group-text">$${data.precio} </span>
                                <input type="number" class="form-control" max="5" min="0" placeholder="0">
                            </div>  
                        </div>  
                </div>
            </div>            
        </div>

        `
}