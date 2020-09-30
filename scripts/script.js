var openMenuButton = document.querySelector("#hamburgerMenu");
var closeMenuButton = document.querySelector("#closeMenu")
var headerMenu = document.querySelector("header");

function toggleMenu () {
    console.log("toggleMenu function active");
    headerMenu.classList.toggle('headeractive');
}

openMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);