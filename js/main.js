let menuHamburger = document.querySelector('.menuhamburger');
let ShowNavbar = document.querySelector('.navbar-mobile');

menuHamburger.addEventListener("click",function(){
    ShowNavbar.classList.toggle("show-navbar");
})