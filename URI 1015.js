var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var [x1, y1] = lines.shift().split(' ')
var [x2 , y2] = lines.shift().split(' ')

//Processamento
var x2x1 = Math.pow(x2 - x1, 2)
var y2y1= Math.pow(y2 - y1, 2)
var raiz = Math.sqrt(x2x1+y2y1)

//Saida
console.log(raiz.toFixed(4))

