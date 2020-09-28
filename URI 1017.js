var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var tempo = lines.shift()
var velocidade = lines.shift()

//Processamento
var distancia = tempo * velocidade
var consumo = distancia/12

//Saida
console.log(consumo.toFixed(3))
