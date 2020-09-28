var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var [numA, numB, numC] = lines.shift().split(' ');

//processamento
var maior = Math.max(numA, numB , numC)

//saida
console.log(maior + ' eh o maior')