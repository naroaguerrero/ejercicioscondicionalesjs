let numero1 = parseInt(window.prompt('Escribe un número'));
let numero2 = parseInt(window.prompt('Escribe otro número'));
/* let numero1S = numero1<numero2
let numero2S = numero1>numero2 */

console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log((numero1+numero2)/2);

/* switch (numero1S) {
    case true:
    console.log(`${numero1} es menor`);
    break;
    case false:
    console.log(`${numero1} es mayor`);
}

switch (numero2S) {
    case true:
    console.log(`${numero2} es menor`);
    break;
    case false:
    console.log(`${numero2} es mayor`);
} */
if (numero1 < numero2) {
    console.log(`${numero1} es menor que ${numero2}`);
  } else if (numero1 > numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
  } else {
    console.log('Los dos son iguales')
} 