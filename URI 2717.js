var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let minExp = parseInt(lines.shift())
let minPre = lines.shift().split(' ')

let presA = parseInt(minPre[0])
let presB = parseInt(minPre[1])

console.log((presA + presB <= minExp)? 'Farei hoje!' : 'Deixa para amanha!')