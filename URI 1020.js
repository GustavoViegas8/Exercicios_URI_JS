var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Entrada
var idadeDias = Number(lines.shift());

//Processamento
let ano = idadeDias/365;
idadeDias = idadeDias % 365;
let mes = idadeDias/30;
idadeDias = idadeDias % 30;
let dias = idadeDias;

//Saida
console.log(parseInt(ano)+' ano(s)');
console.log(parseInt(mes)+' mes(es)');
console.log(parseInt(dias)+ ' dia(s)');