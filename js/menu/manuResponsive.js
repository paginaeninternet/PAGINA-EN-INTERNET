var imgMenu1 = document.querySelector("#img_responsive1");
var imgMenu2 = document.querySelector("#img_responsive2");
var menu = document.querySelector("#cajaBotonesResponsive");



function activarMenu() {
    menu.classList.add("mostrarMenu");
}

function activarMenu2() {
    menu.classList.remove("mostrarMenu");
}

imgMenu1.addEventListener('click', activarMenu, true);
imgMenu2.addEventListener('click', activarMenu2, true);