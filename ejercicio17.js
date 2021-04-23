let numero = Math.floor(Math.random() * 100);
let numero2 = Math.floor(Math.random() * 100);
let numero3 = Math.floor(Math.random() * 100);

if (numero1 > numero2 && numero1 > numero3) {
  window.alert("El número mayor es" + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  window.alert("El número mayor es" + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
  window.alert("El número mayor es" + numero3);
} else {
  window.alert("Han salido dos números iguales");
}
