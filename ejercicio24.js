let numero = parseInt(window.prompt("Escribe un número de tres cifras"));
let par = parseInt(numero.substring(0,1));
let impar = (numero.substring(1,2));
let mezcla = (numero.substring(2,3));

if (par%2===0 && impar%2===0 && mezcla%2===0) {
  console.log("Todos los números son pares");
} else if (par%2!==0 && impar%2!==0 && mezcla%2!==0) {
  console.log("Todos los números son impares");
} else {
  console.log("El número tiene cifras pares e impares");
}
