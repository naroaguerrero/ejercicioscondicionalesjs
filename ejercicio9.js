let temperatura = parseInt(window.prompt('¿Cuál es la temperatura de donde estás?'));

if(temperatura>=40 || temperatura<=10){
    console.log('Vete a otro sitio')
} else if(temperatura >= 30 && temperatura < 40){
    console.log('Enciende el aire acondicionado');
} else if(temperatura < 30 && temperatura >= 20){
    console.log('No hagas nada');
} else if(temperatura > 10 && temperatura < 20){
    console.log('Enciende la calefacción');
} 
