var bm = document.getElementById("burger-menu");
var mn = document.getElementById("mn");
var pr = false;


bm.addEventListener("touchstart",funcion)

function funcion()
{
  if (pr == false)
  {
    mn.style.top = "0";
    pr = true;
  }
  else
  {
    mn.style.top = "-1000px";
    pr = false;
  }
}
