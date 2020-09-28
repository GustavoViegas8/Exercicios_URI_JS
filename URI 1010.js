var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [idItem1, qtdItem1, valorUnitarioItem1] = lines.shift().split(' ');
let [idItem2, qtdItem2, valorUnitarioItem2] = lines.shift().split(' ');

let valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
let valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

let valorTotalCompra = valorTotalItem1 + valorTotalItem2;

console.log('VALOR A PAGAR: R$ ' + valorTotalCompra.toFixed(2))