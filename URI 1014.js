var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var numA = lines.shift()
var numB = lines.shift()

//processamento
var consumo = numA / numB;

//saida
console.log(consumo.toFixed(3)+' km/l')
