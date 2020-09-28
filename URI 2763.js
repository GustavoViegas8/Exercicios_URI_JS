var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var cpf = lines.shift().split('')
var a = cpf.splice(0, 3).join('')
var b = cpf.splice(1, 3).join('')
var c = cpf.splice(2, 3).join('')
var d = cpf.splice(3).join('')
console.log(a)
console.log(b)
console.log(c)
console.log(d)