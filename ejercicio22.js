let mayorEdad = parseInt(window.prompt('¿Cuántos años tienes?'));
let carnet;
let nombre;
let ciudad;
let dias;
mayorEdad >= 18
  ? (carnet = window.prompt('¿Tienes carnet de conducir'))
  : window.alert('Lo siento, eres menor de edad, no puedes alquilar un coche.');
if (carnet === "si") {
  nombre = window.prompt('¿Cómo te llamas y cuáles son tus apellidos?');
  ciudad = window.prompt('¿En qué ciudad recoges el vehículo?');
  dias = parseInt(window.prompt('¿Cuántos días alquilarás el coche?'));
  if (dias === 7) {
    dias = dias * 25 - 25;
    window.alert(nombre + " recoges el vehículo en " + ciudad + " y lo alquilas por" + dias + "€");
  } else if (dias === 14) {
    dias = dias * 25 - 50;
    window.alert(nombre + " recoges el vehículo en " + ciudad + " y lo alquilas por" + dias + "€");
  } else if (dias === 21) {
    dias = dias * 25 - 75;
    window.alert(nombre + " recoges el vehículo en " + ciudad + " y lo alquilas por " + dias + "€");
  } else if (dias === 28) {
    dias = dias * 25 - 100;
    window.alert(nombre + " recoges el vehículo en " + ciudad + " y lo alquilas por " + dias + "€");
  } else {
    window.alert(nombre + " recoges el vehículo en " + ciudad + " y lo alquilas por " + dias * 25 + "€");
  }
} else if (carnet === "no") {
  window.alert('Lo siento, no puedes alquilar el coche porque no tienes carnet');
}
