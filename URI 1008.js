var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let fnum = parseInt(lines.shift())
let hnum = parseInt(lines.shift())
let snum = parseFloat(lines.shift())

let salario = snum * hnum

console.log(`NUMBER = ${fnum}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
