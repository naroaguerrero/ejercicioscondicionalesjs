let numero1 = parseInt(window.prompt('Escribe un número'))
let numero2 = parseInt(window.prompt('Escribe otro número'))
let numero3 = parseInt(window.prompt('Escribe un último número'))
let valor = 20

if(Math.abs(numero1-numero2)===valor){
    console.log(`Diferencia entre ${numero1} y ${numero2} es 20`)
}
if(Math.abs(numero1-numero3)===valor){
    console.log(`Diferencia entre ${numero1} y ${numero3} es 20`)
}
if(Math.abs(numero2-numero3)===valor){
    console.log(`Diferencia entre ${numero2} y ${numero3} es 20`)
}