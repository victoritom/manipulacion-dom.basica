const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

// forma de hacerlo solo desde js
// form.addEventListener('submit', sumarInputValue);

// function sumarInputValue(event) {
//     event.preventDefault()
//     const suma = parseInt(input1.value) + parseInt(input2.value)
//     result.innerHTML = "El resultado es: " + suma
// }

// forma de hacerlo en conjunto de js y HTMl
btn.addEventListener('click', sumarInputValue);

function sumarInputValue() {
    const suma = parseInt(input1.value) + parseInt(input2.value)
    result.innerHTML = "El resultado es: " + suma
}