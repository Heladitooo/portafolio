var menu = document.querySelector(".menuDiv")
var burgerMenu = document.querySelector("#burger-menu")

var ipad = window.matchMedia('screen and (max-width: 767px)')

ipad.addListener(validacion)

function validacion(evento)
{
  if(ipad.matches)
  {
    burgerMenu.addEventListener("click", abrirMenu)
  }
  else
  {
    burgerMenu.removeEventListener("click", abrirMenu)
  }
}
  validacion(ipad);

function abrirMenu()
{
  if (menu.classList.contains("active"))
  {
    menu.classList.remove("active");
  }

  else
  {
    menu.classList.add("active");

  }
}
