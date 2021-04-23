let nombre = window.prompt('¿Como te llamas?');
let ventas = parseInt(window.prompt('¿Cuales son tus ventas?'));
let extra = parseInt(ventas + ventas*0.05)
console.log(nombre);

if(extra>=500){
    console.log(`Te daremos un extra, por lo que se te quedaría en ${ventas+ventas*0.05}`)
} else{
    console.log('Lo siento, no podemos darte un extra')
}
