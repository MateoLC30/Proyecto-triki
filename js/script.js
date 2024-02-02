let contador = 0;
let Ganador0 = "El ganador es 0";
let GanadorX = "El ganador es X";

let espacios = {
  cj1: "",
  cj2: "",
  cj3: "",
  cj4: "",
  cj5: "",
  cj6: "",
  cj7: "",
  cj8: "",
  cj9: "",
}


const c1 = document.getElementById("cj1");
const c2 = document.getElementById("cj2");
const c3 = document.getElementById("cj3");
const c4 = document.getElementById("cj4");
const c5 = document.getElementById("cj5");
const c6 = document.getElementById("cj6");
const c7 = document.getElementById("cj7");
const c8 = document.getElementById("cj8");
const c9 = document.getElementById("cj9");
const respt = document.getElementById("respuesta");

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {location.reload()});

c1.addEventListener("click", leerTexto);
c2.addEventListener("click", leerTexto);
c3.addEventListener("click", leerTexto);
c4.addEventListener("click", leerTexto);
c5.addEventListener("click", leerTexto);
c6.addEventListener("click", leerTexto);
c7.addEventListener("click", leerTexto);
c8.addEventListener("click", leerTexto);
c9.addEventListener("click", leerTexto);


function leerTexto(e){
  if (contador % 2 === 0) {
  e.target.value = "0";
  contador++;
  } else {
    e.target.value = "X";
  contador++;
  }
  espacios[e.target.id] = e.target.value;
  e.target.disabled = true;

  if (espacios.cj1 === "0" && espacios.cj2 === "0" && espacios.cj3 === "0" || espacios.cj1 === "0" && espacios.cj4 === "0"  && espacios.cj7 === "0" || espacios.cj2 === "0" && espacios.cj5 === "0" && espacios.cj8 === "0" || espacios.cj3 === "0" && espacios.cj6 === "0" && espacios.cj9 === "0" || espacios.cj4 === "0" && espacios.cj5 === "0" && espacios.cj6 === "0" || espacios.cj7 === "0" && espacios.cj8 === "0" && espacios.cj9 === "0" || espacios.cj1 === "0" && espacios.cj5 === "0" && espacios.cj9 === "0" || espacios.cj7 === "0" && espacios.cj5 === "0" && espacios.cj3 === "0") {
    c1.disabled = true;
    c1.classList.add("pintar");
    c2.disabled = true;
    c2.classList.add("pintar");
    c3.disabled = true;
    c3.classList.add("pintar");
    c4.disabled = true;
    c4.classList.add("pintar");
    c5.disabled = true;
    c5.classList.add("pintar");
    c6.disabled = true;
    c6.classList.add("pintar");
    c7.disabled = true;
    c7.classList.add("pintar");
    c8.disabled = true;
    c8.classList.add("pintar");
    c9.disabled = true;
    c9.classList.add("pintar");
    respt.innerHTML = Ganador0;
  } else if (espacios.cj1 === "X" && espacios.cj2 === "X" && espacios.cj3 === "X" || espacios.cj1 === "X" && espacios.cj4 === "X"  && espacios.cj7 === "X" || espacios.cj2 === "X" && espacios.cj5 === "X" && espacios.cj8 === "X" || espacios.cj3 === "X" && espacios.cj6 === "X" && espacios.cj9 === "X" || espacios.cj4 === "X" && espacios.cj5 === "X" && espacios.cj6 === "X" || espacios.cj7 === "X" && espacios.cj8 === "X" && espacios.cj9 === "X" || espacios.cj1 === "X" && espacios.cj5 === "X" && espacios.cj9 === "X" || espacios.cj7 === "X" && espacios.cj5 === "X" && espacios.cj3 === "X"){
    c1.disabled = true;
    c1.classList.add("pintar");
    c2.disabled = true;
    c2.classList.add("pintar");
    c3.disabled = true;
    c3.classList.add("pintar");
    c4.disabled = true;
    c4.classList.add("pintar");
    c5.disabled = true;
    c5.classList.add("pintar");
    c6.disabled = true;
    c6.classList.add("pintar");
    c7.disabled = true;
    c7.classList.add("pintar");
    c8.disabled = true;
    c8.classList.add("pintar");
    c9.disabled = true;
    c9.classList.add("pintar");
    respt.innerHTML = GanadorX;
    
  }
}

function reset() {
  location.reload();
}













/**|| cj3 === 0 & cj4 === 0 & cj5 === 0 || cj7 === 0 & cj8 === 0 & cj9 === 0 || cj1 === 0 & cj4 === 0 & cj7 === 0 || cj2 === 0 & cj5 === 0 & cj8 === 0 || cj3 === 0 & cj6 === 0 & cj9 === 0 ||cj1 === 0 & cj5 === 0 & cj9 === 0 || cj7 === 0 & cj5 === 0 & cj3 === 0) **/
