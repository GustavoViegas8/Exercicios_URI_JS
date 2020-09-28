var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var [numA, numB, numC] = lines.shift().split(' ');

//Processamento
var tglRetangulo = numA * numC / 2;
var aCirculo =  3.14159 * Math.pow(numC, 2);
var aTrapezio = ((numA*1 + numB*1) * numC) / 2;
var aQuadrado = numB * numB;
var aRetangulo = numA * numB;

//Saida
console.log('TRIANGULO: ' + tglRetangulo.toFixed(3));
console.log('CIRCULO: ' + aCirculo.toFixed(3));
console.log('TRAPEZIO: ' + aTrapezio.toFixed(3));
console.log('QUADRADO: ' + aQuadrado.toFixed(3));
console.log('RETANGULO: ' + aRetangulo.toFixed(3));