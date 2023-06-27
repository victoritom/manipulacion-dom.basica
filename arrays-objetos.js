// ¿Qué es un array?
const array = [1, 'jajaja', true, false, { nombre: 'lala', edad: 3 }];

// ¿Qué es un objeto?
const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'Vegetales'],
};

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirPrimeroElementoArray(arr) {
    console.log(arr[0]);
}

imprimirPrimeroElementoArray(['Andrea', 'Anny', 'Maria', 'Sofia',]); // Imprime 'Andrea'

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprmirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imprmirElementoPorElemento(['Andrea', 'Anny', 'Maria', 'Sofia',]); // imprime 'Andrea', 'Anny', 'Maria', 'Sofia'

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprmirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imprmirElementoPorElementoObjeto(obj); // Fulanito, 3, array(2)[ Pollo frito,Vegetales]

