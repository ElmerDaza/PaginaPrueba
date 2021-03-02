
let btn_menu = document.getElementById('boton_menu');
let menu = document.getElementById('menu_b');
btn_menu.addEventListener('click',function(){
    'use strict'
    menu.classList.toggle('desplegar_menu');
});
function cambiar(){
    let ca = document.getElementById('ca');
    ca.src = "img/andrea.jpg";
}