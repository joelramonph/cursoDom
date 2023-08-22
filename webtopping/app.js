//Metodos para seleccionar elementos
// const tEl =  document.getElementById('titulo')
// console.log(tEl);

// tEl.innerHTML = 'Bienvenidos'

//aceitunasEl.style.backgroundColor = 'blue'
// const toppingEl = document.getElementsByClassName('topping')


//document.getElementsByTagName('')
//document.querySelector('ul li.fondo-naranja')
//document.querySelectorAll('.topping.fondo-naranja')

// 4  Agregar una clase al primer elemento 
// const primerTopping = document.querySelector('.top')
// primerTopping.classList.add('primer-elemento')
// const toppings = document.getElementsByClassName('topping')

// Verificar si una clase existe
// console.log(primerTopping.classList.contains('primer-elemento'));

// Eliminar una clase
// primerTopping.classList.remove('top')


// 5 Crear, eliminar elementos en el DOM
// Crear
// const listaToppingEl = document.getElementById('lista-topping')
// const nuevoElemento = document.createElement('li')
// nuevoElemento.classList.add('top', 'fondo-naranja')
// nuevoElemento.innerText = 'Desarrollo App'
// listaToppingEl.append(nuevoElemento)
// // Eliminar
// nuevoElemento.remove()

// 6 Recorrer el DOM
// const listaToppingEl = document.getElementById('lista-topping')
// console.log(listaToppingEl.parentElement);
// console.log(listaToppingEl.children[1]);
// console.log(listaToppingEl.firstElementChild);
// console.log(listaToppingEl.lastElementChild);
// console.log(listaToppingEl.previousElementSibling);
// console.log(listaToppingEl.nextElementSibling);

// 7 Eventos de DOM

// Elemento Target: Es el elemento donde va ocurrir ese evento

// Trigger es la accion que decencadena otras acciones

// Event Handler: funcion que se ejecuta cuando ocurre un evento

// Event Listener: Es la asociacion que existe entre el evento y la funcion que se ejecuta

// const realidadVEl = document.getElementById('rv')
// realidadVEl.addEventListener('click', mostrarClick)
const topEls = document.getElementsByClassName('top')

// 7.1 Metodo addEventLitener con funcion y un  for of  
// function mostrarClick(e){
//     console.log(e.target.innerText)
// }
// for (const top of topEls){
// top.addEventListener('click', mostrarClick)
// }


//7.2 crear el evento con funcion flecha

for (const top of topEls){
    top.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
    }
    


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
// const atributoEl = document.getElementsByTagName('a')

// console.log(atributoEl);

// Eventos del DOm


// const tops = document.getElementsByClassName('top')
// const albahaca = document.getElementById('albahaca')

// function myclic(e){
//     console.log(e.target.innerText);
// }

// albahaca.addEventListener('click', myclic)

// for(const top of tops){
//   top.addEventListener('click', (e) =>{
//     console.log(e.target.innerText); 
//   })
// } 