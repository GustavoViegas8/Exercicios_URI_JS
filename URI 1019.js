var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

let segundos = valor%60;
let minutos = (valor-segundos)/60;
let horas = minutos/60;
let mtsFinal = minutos%60;

console.log(`${parseInt(horas)}:${mtsFinal}:${segundos}`)