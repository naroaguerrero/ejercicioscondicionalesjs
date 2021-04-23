let opcion = window.prompt(
  "Elije lo que quieras comer hoy: \n Papas con mojo \n Croquetas \n Queso Asado \n Carne"
);

if (opcion === "Papas con mojo") {
  let opcion2 = window.alert("Has eledido papas con mojo verde");
} else if (opcion === "Croquetas") {
  window.alert("Has elegido croquetas de pollo con zanahoria");
} else if (opcion === "Queso Asado") {
  window.alert("Has elegido queso asado con mojo rojo");
} else if (opcion === "Carne") {
  window.alert("Has elegido carne fiesta");
} else {
  window.alert("¿No tienes hambre o qué?");
}

switch (opcion) {
  case "Papas con mojo":
    window.alert("Has eledido papas con mojo verde");
    break;
  case "Croquetas":
    window.alert("Has elegido croquetas de pollo con zanahoria");
    break;
  case "Queso Asado":
    window.alert("Has elegido queso asado con mojo rojo");
    break;
  case "Carne":
    window.alert("Has elegido carne fiesta");
    break;
  default:
    window.alert("¿No tienes hambre o qué?");
}
