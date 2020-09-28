var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = parseInt(lines);

let cidades = ['Brasilia', 'Salvador', 'Sao Paulo', 'Rio de Janeiro', 'Juiz de Fora', 'Campinas', 'Vitoria', 'Belo Horizonte'];
let ddd = [61, 71, 11, 21, 32, 19, 27, 31];

for (var i=0; i < ddd.length; i++)
{
    if (ddd[i] == num)
    {
        console.log(cidades[i]);
        return;
    }
}
console.log('DDD nao cadastrado');
