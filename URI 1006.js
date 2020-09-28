var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseFloat(lines.shift())
let valor2 = parseFloat(lines.shift())
let valor3 = parseFloat(lines.shift())

let m1 = valor1 * 2
let m2 = valor2 * 3
let m3 = valor3 * 5

console.log(`MEDIA = ${((m1+m2+m3)/10).toFixed(1)}`)