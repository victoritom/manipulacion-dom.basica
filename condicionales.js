const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
function imprimirDescripcion(tipoDeSuscripcion) {

    tipoDeSuscripcion = prompt("Ingrese su tipo de suscripcion");

    if (tipoDeSuscripcion == 'Free') {
       console.log("Solo puedes tomar los cursos gratis");
    }
    else if (tipoDeSuscripcion == 'Basic') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (tipoDeSuscripcion == 'Expert') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if (tipoDeSuscripcion == 'ExpertDuo') {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    else{
        console.log("No tienes ninguna suscripcion");
    }
}

// Esta es una segunda forma de hacerlo
let tipoDeSuscripcion = prompt("Ingrese su tipo de suscripcion");

    if (tipoDeSuscripcion == 'Free') {
       console.log("Solo puedes tomar los cursos gratis");
    }
    else if (tipoDeSuscripcion == 'Basic') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (tipoDeSuscripcion == 'Expert') {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if (tipoDeSuscripcion == 'ExpertDuo') {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    else{
        console.log("No tienes ninguna suscripcion");
    }

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional.
const tipoDeSuscripcion = 'Free'

const mensaje = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertDuo": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

console.log(mensaje[tipoDeSuscripcion] ? mensaje[tipoDeSuscripcion] : "Tipo de suscripcion no valido");