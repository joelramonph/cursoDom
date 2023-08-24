const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}
//   actualizar color rojo
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  // rojo = inputRojo.value
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});
//   actualizar color verde
inputVerde.addEventListener("change", (e) => {
    verde = e.target.value;
    // verde = inputVerde.value
    textoRojo.textContent = verde;
    actualizarColor(rojo, verde, azul);
  });
//   actualizar color azul
  inputAzul.addEventListener("change", (e) => {
    azul = e.target.value;
    // azul = inputAzul.value
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul);
  });
  