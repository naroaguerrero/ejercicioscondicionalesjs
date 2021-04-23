let palabra = window.prompt("Escribe que le quieres decir a Bob");
if (
  palabra.substring(palabra.length - 2) === "!?" ||
  palabra.substring(palabra.length - 2) === "?!"
) {
  console.log("¡Eh tranquilizate!");
} else if (palabra.substring(palabra.length - 1) === "!") {
  console.log("¡Eh!");
} else if (palabra.substring(palabra.length - 1) === "?") {
  console.log("¡Claro!");
} else if (palabra.length == 0) {
  console.log("Vale con que esas tenemos...");
} else {
  console.log("Sin más");
}
