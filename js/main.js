var burger = document.querySelector(".burger-menu");
var burgerRotateHaut = document.querySelector(".bar__haut");
var burgerRotateCentre = document.querySelector(".bar__centre");
var burgerRotateBas = document.querySelector(".bar__bas");
var navColor = document.querySelectorAll(".nav__a a");
var navTranslate = document.querySelector(".nav__a");



burger.addEventListener("click", function(){
   navTranslate.classList.toggle("__is-Active");
   burgerRotateHaut.classList.toggle("rotation__haut");
   burgerRotateCentre.classList.toggle("rotation__centre");
   burgerRotateBas.classList.toggle("rotation__bas");

   console.log("test");
})

navColor.forEach(function(nav) {
   burger.addEventListener("click", function(){
      nav.classList.toggle("__a__color");
      console.log("second");
   })
})