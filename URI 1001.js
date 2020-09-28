var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())

let x = a + b

console.log(`X = ${x}`)