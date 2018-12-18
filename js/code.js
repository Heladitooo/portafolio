var bm = document.getElementById("burger-menu");
var mn = document.getElementById("mn");
var ms = document.getElementById("ms");
var diplomaoculto = document.getElementById("diplomaoculto");
var diplomaoculto = document.getElementById("diplomaoculto");



var pr = false;
var mr = false;
var sr = false;




bm.addEventListener("touchstart",funcion)

ms.addEventListener("click",funcionms)

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

function funcionms()
{
  if (mr == false)
  {
    diplomaoculto.style.display = "grid";

    diplomaoculto.style.animationPlayState = "running";

    ms.innerHTML = "mostrar menos";
    mr = true;

  }

  else if (mr == true)
  {
    diplomaoculto.style.animationName = "dpi";
    ms.innerHTML = "mostrar mas diplomas";
    mr = false;
    diplomaoculto.addEventListener("animationend",salida)

    function salida()
    {
        if(mr == false)
        {
          diplomaoculto.style.display = "none";
          diplomaoculto.style.animationName = "dpo";
        }

    }
  }
}
