let anyo = parseInt(
  window.prompt("Escribe un año para saber si es bisiesto o no")
);

if ((anyo % 4 === 0 && anyo % 100 === 0) || anyo % 400 === 0) {
  console.log("El año es bisiesto");
} else {
  console.log("El año no es bisiesto");
}
