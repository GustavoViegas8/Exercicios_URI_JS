var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines)
let time = (60 * entrada)/30
console.log(time+' minutos')