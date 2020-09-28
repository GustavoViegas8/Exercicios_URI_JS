var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift()
let salario = parseFloat(lines.shift())
let vendas = parseFloat(lines.shift())

let aumento = vendas * 0.15
let soma = parseInt(salario) + aumento

console.log(`TOTAL = R$ ${soma.toFixed(2)}`)