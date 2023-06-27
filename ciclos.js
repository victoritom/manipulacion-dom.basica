for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let respuesta;

while (respuesta != '4') {
    let pregunta= prompt('Cuanto es 2 + 2')
    respuesta = pregunta;
}

alert("Felicidades");