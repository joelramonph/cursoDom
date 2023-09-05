const colorEl = document.getElementById("color")
const btnEl =  document.querySelector("button")

function codigoRadon(){
    let digitos = "0123456789abcdef"
    let codigoHex = "#"

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio =  Math.floor(Math.random() * 16)
        codigoHex += digitos[indiceAleatorio]
        
    }
    return codigoHex

}

btnEl.addEventListener('click', function(){
    let cambioColor = codigoRadon()
    colorEl.textContent = cambioColor
    btnEl.style.backgroundColor = cambioColor
    document.body.style.backgroundColor = cambioColor
})