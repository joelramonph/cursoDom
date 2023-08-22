const  buttonEl = document.querySelector('button')
const colorEl = document.getElementById('color')

function generaColorHexadecimal(){
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorHex +=  digitos[indiceAleatorio]
        
    }
    return  colorHex;
}


buttonEl.addEventListener('click', function() {
    let colorAleatorio = generaColorHexadecimal()
    colorEl.textContent = colorAleatorio
    document.body.style.backgroundColor = colorAleatorio
})