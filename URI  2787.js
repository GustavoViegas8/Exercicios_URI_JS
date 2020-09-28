var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines.shift())
let num2 = parseInt(lines.shift())

let valor1 = num1%2
let valor2 = num2%2

if ((valor1 === 0 && valor2 === 0) || (valor1 === 1 && valor2 === 1))
{
    console.log('1')
}
else if ((valor1 === 1 && valor2 === 0) || (valor1 === 0 && valor2 === 1))
{
    console.log('0')
}
