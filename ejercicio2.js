const prompt = require('prompt-sync')();
let contrasena = prompt("Ingrese La contraseña: ");
let numeroIntentos = 0;
const pinCorrecto = "0000";



while (contrasena !== pinCorrecto) {

    console.log("La contraseña es incorrecta")
    contrasena = prompt("Ingrese La contraseña: ");
}



console.log("la contraseña es Correcta: " + contrasena);



// n = 0;
// x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }