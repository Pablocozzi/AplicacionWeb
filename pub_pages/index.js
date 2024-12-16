// hay que exportar para despues importar
import { navBar } from "../componentes/navbar.js"

//generamos el contenedor con header
let navContainer = document.querySelector('header')
//agregamos de titulo, la categoria en la pagina
let pageName = document.getElementById("pageName")
let pageNameValue = pageName.value 
let title = document.getElementById('title')

//creamos evento para cargarla en header
window.addEventListener("load", ()=> {

    navContainer.innerHTML = navBar;
    let title = document.getElementById('title');
    if (title) {
        title.textContent = pageNameValue;
    }
    if (pageName) {
        document.title = pageNameValue;
    }
})

let userName = document.getElementById("txtName")

