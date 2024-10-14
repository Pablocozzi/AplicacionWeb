

//creamos url
const url = "http://127.0.0.1:5500/eBooks/"

//array de elementos incluidos en navbar
const navElements = [
    {tittle: "Inicio", link: `${url}pub_pages/index.html`},
    {tittle: "Cocina", link: `${url}pub_pages/cocina.html`},
    {tittle: "Deportes", link: `${url}pub_pages/deportes.html`},
    {tittle: "Ciencia Ficcion", link: `${url}pub_pages/ficcion.html`},
    {tittle: "Login", link: `${url}pub_pages/login/login.html`}
]
//codigo de navbar, para ingresarla en todas las paginas
// hay que exportar para despues importar
export const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="./index.html"><img src="../Images/wonder book.png" alt="logo" style="width: 50px; height: 50px;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">               
                ${
                    navElements.map(e =>{
                        return `
                        <li class="nav-item">
                        <a class="nav-link" href=${e.link}>${e.tittle}</a>
                        </li>
                        `
                    }).join('')
                }
            </ul>            
            <a href="./login.html" class="btn btn-danger">
                <i class="bi bi-box-arrow-in-left"></i>
            </a> 
        </div>
    </nav>
`