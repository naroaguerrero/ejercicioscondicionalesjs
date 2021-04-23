let password = (window.prompt("Escribe tu contraseña"));

password.length>=8
  ? console.log("Contraseña correcta")
  : console.log("Contraseña incorrecta, introduzca 8 caracteres mínimo");
