let nota = parseInt(window.prompt("Nota del primer examen"));
let nota2 = parseInt(window.prompt("Nota del segundo examen"));
let nota3 = parseInt(window.prompt("Nota del tercer examen"));

var mejorExamen;
nota > nota2 ? (mejorExamen = nota) : (mejorExamen = nota2);

let final = (mejorExamen + nota3) / 3;

console.log(`Has sacado un ${final}`);

if (final == 10) {
  console.log("Matrícula de Honor");
} else if (final >= 9) {
  console.log("Sobresaliente");
} else if (final >= 7) {
  console.log("Notable");
} else if (final >= 6) {
  console.log("Bien");
} else if (final >= 5) {
  console.log("Suficiente");
} else {
  console.log("Suspenso");
}
