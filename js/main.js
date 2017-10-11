// GO!

// TASK 1 -- Show/Hide Nav
// llamar un eventListener al elemento del DOM
// hacer que nav-menu se oculte y guardar ese cambio
// ligar la acción de ocultar nav-menu al evento del click
// cuando vuelva a dar un click mostrar de nuevo nav-menu
var btnMagic = document.querySelector("#hide-nav button")
btnMagic.addEventListener("click", function hideAndShow() {
  var hide = document.querySelector(".nav-menu")
  hide.classList.toggle("nav-menu-hidden")

})

// TASK 2 -- Select an Icon
// quitar o agregar la clase "selected" cuando ocurra el evento click

var btns = document.querySelectorAll('.wish-list div')
// btns.addEventListener("click", function removeAddClass(evt)
var divCollection = [...btns]

for (var i = 0; i < divCollection.length; i++) {
    var button = divCollection[i]


    function changeClass() {
      var currentElement = this
      currentElement.classList.toggle("selected")
    }

    button.addEventListener("click", changeClass)

}
  // var element = evt.target.innerHTML = '.option .selected'




// TASK 3 -- Move
// cuando vuelva a dar un click mostrar de nuevo nav-menu Item From List to List

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
