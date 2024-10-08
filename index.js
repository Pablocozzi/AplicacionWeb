//array de elementos incluidos en navbar
const navElements = [
    {tittle: "Inicio", link: "./index.html"},
    {tittle: "Cocina", link: "./cocina.html"},
    {tittle: "Deportes", link: "./deportes.html"},
    {tittle: "Ciencia Ficcion", link: "./ficcion.html"},
    {tittle: "Login", link: "./login.html"}
]
//codigo de navbar, para ingresarla en todas las paginas
const navBar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="./index.html"><img src="./Images/wonder book.png" alt="logo" style="width: 50px; height: 50px;"></a>
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
//generamos el contenedor con header
let navContainer = document.querySelector("header")
//creamos evento para cargarla en header
window.addEventListener("load", ()=> {
    navContainer.innerHTML = navBar
})



let userName = document.getElementById("txtName")