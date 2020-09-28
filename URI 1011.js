var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines)
let volume = (4/3) * 3.14159 * Math.pow(raio, 3)

console.log('VOLUME =',volume.toFixed(3))