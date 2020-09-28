var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseInt(lines.shift())
let valor2 = parseInt(lines.shift())

console.log(`PROD = ${valor1*valor2}`)