let dia = window.prompt("Introduce un día de la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  console.log(`Hoy es ${dia}`);
} else if (dia === "sabado" || dia === "domingo") {
  console.log("Hoy es fin de semana");
} else {
  console.log("Deja de hacer el tonto");
}

switch (dia) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log(`Hoy es ${dia}`);
    break;

  case "sabado":
  case "domingo":
    console.log(`Hoy es ${dia}`);
    break;
  default:
    console.log("Deja de hacer el tonto");
}
