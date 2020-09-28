var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseInt(lines.shift())
let valor2 = parseInt(lines.shift())
let valor3 = parseInt(lines.shift())
let valor4 = parseInt(lines.shift())

let soma = (valor1*valor2) - (valor3*valor4)

console.log(`DIFERENCA = ${soma}`)
