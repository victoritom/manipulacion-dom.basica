// Determina el nombre y tipo de dato para almacenar en variables la siguiente información
let name = "Victor Manuel"; // string
let lastName = "Solarte Munoz"; // string
let username = "victoritom"; // string
let age = 19; // number
let email = "victoritom20049@gmail.com"; // string
let isMayorDeEdad = true // boolean
let dineroAhorrado = 340.00; // number
let deudas = 120.00; // number

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
let fullname = `${name} ${lastName}`;
let realMoney = dineroAhorrado - deudas;
console.log(`Nombre completo: ${fullname}`);
console.log(`Dinero real: ${realMoney}`);