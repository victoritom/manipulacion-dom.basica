const name = "Victor Manuel";
const lastName = "Solarte Munoz";
const complateName = `${name} ${lastName}`;
const nickname = "Victoritom";

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
function nombreCompleto(name, lastName, nickname) {
    let fullName = `Mi nombre completo es ${name} ${lastName} pero prefiero que me digas ${nickname}`
  
    return fullName
  }
  
  nombreCompleto("Victor Manuel", "Solarte Munoz", "Victoritom");