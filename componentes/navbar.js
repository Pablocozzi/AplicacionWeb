const url = "http://127.0.0.1:5500/"


const navElements = [
    {tittle: "Inicio", link: `${url}./pub_pages/home.html`},
    {tittle: "Cocina", link: `${url}./pub_pages/cocina.html`},
    {tittle: "Deportes", link: `${url}./pub_pages/deportes.html`},
    {tittle: "Ciencia Ficcion", link: `${url}./pub_pages/ficcion.html`},
    {tittle: "Login", link: `${url}./pub_pages/login/login.html`}
]

export const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="./home.html"><img src="../Images/wonder book.png" alt="logo" style="width: 50px; height: 50px;"></a>
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
            <a href="./carrito.html" class="btn">
                <i class="bi bi-cart-check"></i>
            </a>
            <a href="./login/login.html" class="btn">
                <i class="bi bi-box-arrow-in-left"></i>
            </a> 
        </div>
    </nav>
`