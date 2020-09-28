var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = lines.shift().split(' ')
var cachorros = parseInt(num[0])
var participantes = parseInt(num[1])

var media = cachorros/participantes
console.log(media.toFixed(2))