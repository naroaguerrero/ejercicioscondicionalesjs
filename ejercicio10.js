let valor = parseInt(window.prompt("Escribe un valor"));
let valor2 = parseInt(window.prompt("Escribe otro valor"));

if (valor === valor2) {
  console.log('0');
} else if (Math.abs(numero1 % 6) === Math.abs(numero2 % 6)) {
  numero1 < numero2
    ? console.log(`El número menor es ${numero1}`)
    : console.log(`El número menor es ${numero2}`);
} else {
  numero1 < numero2
    ? console.log(`El número mayor es ${numero1}`)
    : console.log(`El número mayor es ${numero2}`);
}
