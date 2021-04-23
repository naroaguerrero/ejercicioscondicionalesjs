let ageMayor = parseInt(window.prompt("¿Cuántos años tiene tu hijo mayor?"));
let ageMenor = window.prompt(
  "¿Cuántos años de diferencia hay entre el mayor y el menor?"
);

(ageMayor >= 18)
  ? console.log("Tu hijo menor es mayor de edad")
  : console.log("Tu hijo menor todavía no es meyor de edad");
