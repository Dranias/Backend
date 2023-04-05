
function generarNumeroAleatorio() {
  let numero = Math.floor(Math.random() * 1000000000000); // genera un número aleatorio de hasta 12 dígitos
  let primerDigito = Math.floor(Math.random() * 9) + 1; // genera un dígito aleatorio entre 1 y 9
  return primerDigito.toString() + numero.toString().padStart(12, '0'); // concatena el primer dígito y el número generado
}

  module.exports = generarNumeroAleatorio;