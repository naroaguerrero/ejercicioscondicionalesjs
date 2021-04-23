let temperatura = parseInt(window.prompt("¿Cuál es la temperatura?"));
let valor = (
  window.prompt(
    "¿Quieres saber la temperatura convertida en centígrados, escribe C y si quieres saber la temperatura en fahrenheit, escribe F"
  )
);
let CF = ((temperatura * 9) / 5 + 32);
let FC = (temperatura - 32) * 5 / 9;

let C = CF
let F = FC

if (valor==="F") {
  console.log(`Tu temperatura en fahrenheit es ${CF}`);
} else if (valor==="C") {
  console.log(`Tu temperatura en centígrados son ${FC}`);
}
