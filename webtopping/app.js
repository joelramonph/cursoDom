//Metodos para seleccionar elementos
//document.getElementById('')
//document.getElementsByClassName('')
//document.getElementsByTagName('')
//document.querySelector('ul li.fondo-naranja')
//document.querySelectorAll('.topping.fondo-naranja')

// const toppings = document.getElementsByClassName('topping')
// console.log(toppings);

//Asignar  estilos

// const primerTopping = document.querySelector('.topping.fondo-naranja')
// console.log(primerTopping.style); muestra la propiedades
// primerTopping.style.backgroundColor = 'blue'
// primerTopping.style.textTransform = 'uppercase';

//Texto en el dom acceder texto

// const listaTopping = document.getElementById('lista-topping')
// console.log('> innerText')
// console.log(listaTopping.innerText);
// console.log('> textContent ');
// console.log(listaTopping.textContent);
// console.log('> innerHTML');
// console.log(listaTopping.innerHTML);

//Modificar atributos de elementos
const atributoEl = document.getElementsByTagName('a')

console.log(atributoEl);

// Eventos del DOm

// Elemento Target: Es el elmento donde va ocurrir ese evento

// Trigger es la accion que decencadena otras acciones

// Event Handler: funcion que se ejecuta cuando ocurre un evento

// Event Listener: Es la asociacion que existe entre el evento y la funcion que se ejecuta

const toppings = document.getElementsByClassName('topping')
// const albahaca = document.getElementById('albahaca')

// function myclic(e){
//     console.log(e.target.innerText);
// }

// albahaca.addEventListener('click', myclic)

for(const topping of toppings){
  topping.addEventListener('click', (e) =>{
    console.log(e.target.innerText); 
  })
} 