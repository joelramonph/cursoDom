const btnEl = document.getElementById('boton-cambiar-cita')
const citaEl = document.getElementById('cita')
const autorEl = document.getElementById('autor')

function generadorAleatorioEntero(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}


function cambiarCita(){
    let indiceAleatorio = generadorAleatorioEntero(0, citas.length)
    citaEl.innerText = `"${citas[indiceAleatorio].texto}"`
    autorEl.innerText = citas[indiceAleatorio].autor
   

}

cambiarCita()

btnEl.addEventListener('click', cambiarCita)