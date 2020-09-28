var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = lines.shift().split(' ');

let horaA = parseInt(array.shift());
let horaB = parseInt(array.shift());
var duracao;

if (horaA > horaB)
{
    duracao = (24-horaA)+horaB;
}
else if (horaA < horaB)
{
    duracao = horaB - horaA;
}
else
{
    duracao = 24;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
