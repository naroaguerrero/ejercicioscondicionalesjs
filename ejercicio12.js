let carrera = parseInt(window.prompt('¿En qué puesto quedaste?'));

if(carrera==1){
    console.log('¡Ganaste!');
    console.log('Medalla de oro')
} else if(carrera==2){
    console.log('Medalla de plata')
} else if(carrera==3){
    console.log('Medalla de bronce')
} else {
    console.log('Lo importante es participar')
}


switch(carrera){
    case 1:
        console.log('Medalla de oro');
        console.log('Sube al podium');
        break;
    case 2:
        console.log('Medalla de plata');
        console.log('Sube al podium');
        break;
    case 3:
        console.log('Medalla de bronce');
        console.log('Sube al podium');
        break;
    default:
        console.log('Lo importante es participar');  
        console.log('Se acabó la carrera')      
}
    
//Hice el ejercicio todo junto.
    