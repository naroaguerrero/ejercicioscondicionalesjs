let numero1 = parseInt(window.prompt("Escribe un número"));
let numero2 = parseInt(window.prompt("Escribe otro número"));

if (numero1 < numero2) {
  console.log(`${numero1} es menor que ${numero2}`);
} else if (numero1 > numero2) {
  console.log(`${numero2} es mayor que ${numero1}`);
} else if (numero1 == numero2){
  console.log("Los dos son iguales");
}
