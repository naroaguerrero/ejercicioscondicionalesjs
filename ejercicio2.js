let edad = parseInt(window.prompt('Escribe tu edad'))
if(edad<=8){
    console.log('Puedes subirte en el tobogán')
}else{
    console.log('Eres demasiado mayor para usar el tobogán')
}

/* Se puede añadir:
if(edad.typeOf() !== 'int') 
Entonces, if(edad<=8 pasa a else if*/