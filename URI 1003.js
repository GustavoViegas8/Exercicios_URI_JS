var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let area = Math.pow(lines.shift(), 2)
let area2 = 3.14159 * area
console.log(`A=${area2.toFixed(4)}`)
