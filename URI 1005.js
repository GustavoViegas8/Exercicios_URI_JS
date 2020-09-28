var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseFloat(lines.shift())
let valor2 = parseFloat(lines.shift())

let m1 = valor1 * 3.5
let m2 = valor2 * 7.5

console.log(`MEDIA = ${((m1+m2)/11).toFixed(5)}`)