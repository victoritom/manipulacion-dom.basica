// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid');
// const img = document.createElement('img')

// console.log({
    //     h1,
    //     p,
    //     parrafito,
    //     pid,
    //     input
    // })
    
// h1.innerHTML = 'Putito <br/> feo'; convierte todo en html  
    
// h1.innerText = 'Purtito <br> Feo'; convierte todo a texto

//console.log(h1.getAttribute('class')) // para modificar un atributo

//h1.setAttribute('class', 'rojo'); // modifica el valor de el atributo


// h1.classList.add('rojo');  se le agrega una clase

// h1.classList.remove('verde'); elimina la clase

// input.value = 2453; agrga un valor por defecto a el input

// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABfV4wEy0g6Tb3u-kIX2YbkL8KNDzNs0-IrSgHTJ0oA&s');
// console.log(img)

// pid.innerHTML = ""
// pid.append(img); para crear una etiqueta en HTML

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnOnClick() {
    const suma = parseInt(input1.value) + parseInt(input2.value)
    result.innerHTML = "El resultado es: " + suma
}

function btnOnClick1() {
    const resta = parseInt(input1.value) - parseInt(input2.value)
    result.innerHTML = "El resultado es: " + resta
}

function btnOnClick2() {
    const multiplicacion = parseInt(input1.value) * parseInt(input2.value)
    result.innerHTML = "El resultado es: " + multiplicacion
}

function btnOnClick3() {
    const division = parseInt(input1.value) / parseInt(input2.value)
    result.innerHTML = "El resultado es: " + division
}