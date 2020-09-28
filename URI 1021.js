var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var valor = Number(lines.shift());

//Processamento
let nota100 = parseInt(valor/100);
valor = valor - (nota100*100)+ 0.00001;
let nota50 = parseInt(valor/50);
valor = valor - (nota50*50)+ 0.00001;
let nota20 = parseInt(valor/20);
valor = valor - (nota20*20)+ 0.00001;
let nota10 = parseInt(valor/10);
valor = valor - (nota10*10)+ 0.00001;
let nota05 = parseInt(valor/5);
valor = valor - (nota05*5)+ 0.00001;
let nota02 = parseInt(valor/2);
valor = valor - (nota02*2)+ 0.00001;
let moeda01 = parseInt(valor/1);
valor = valor - (moeda01*1)+ 0.00001;
let moeda050 = parseInt(valor/0.50);
valor = valor - (moeda050*0.50)+ 0.00001;
let moeda025 = parseInt(valor/0.25);
valor = valor - (moeda025*0.25)+ 0.00001;
let moeda010 = parseInt(valor/0.10);
valor = valor - (moeda010*0.10)+ 0.00001;
let moeda005 = parseInt(valor/0.05);
valor = valor - (moeda005*0.05)+ 0.00001;
let moeda001 = parseInt(valor/0.01);

//Saida
console.log('NOTAS:');
console.log(nota100 + ' nota(s) de R$ 100.00');
console.log(nota50 + ' nota(s) de R$ 50.00');
console.log(nota20 + ' nota(s) de R$ 20.00');
console.log(nota10 + ' nota(s) de R$ 10.00');
console.log(nota05 + ' nota(s) de R$ 5.00');
console.log(nota02 + ' nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(moeda01 + ' moeda(s) de R$ 1.00');
console.log(moeda050 + ' moeda(s) de R$ 0.50');
console.log(moeda025 + ' moeda(s) de R$ 0.25');
console.log(moeda010 + ' moeda(s) de R$ 0.10');
console.log(moeda005 + ' moeda(s) de R$ 0.05');
console.log(moeda001 + ' moeda(s) de R$ 0.01');
