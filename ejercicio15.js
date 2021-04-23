let helado = parseInt(
  window.prompt("Escoge la cantidad de helados que quieres")
);
let totalHelados = helados * 2;

helado >= 10
  ? console.log(`Te llevas${helado++} y te cuestan ${helado * 2}`)
  : console.log(`Te llevas${helado} y te cuestan ${helado * 2}`);

  /* EJMPLO 1
  if ((helados >= 10)) {
  helado = helado++;
  console.log(helado);
  console.log(totalHelados);
} else {
    console.log(helado);
    console.log(totalHelados);
} */

/* EJEMPLO 2
  if(helado>=10){
    console.log(`Te llevas${helado++} y te cuestan ${helado*2}`)
} else {
    console.log(`Te llevas${helado} y te cuestan ${helado*2}`)
} */
