let numero = (window.prompt('Escribe un entre 25 y 75'));
let numero2 = (window.prompt('Escribe otro numero entre 25 y 75'));

let aa
let ab
let bb
let ba

aa = numero.substring(0,1)
ab = numero.substring(1)
bb = numero2.substring(0,1)
ba = numero2.substring(1)

if (aa===bb || aa===ba || ab===bb || ab===ba) {
    window.alert('Hay dos digitos en común')
}