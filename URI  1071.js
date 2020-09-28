var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift())
var y = parseInt(lines.shift())

let maior = Math.max(x, y)
let menor = Math.min(x , y)
menor += 1
soma = 0;

while (menor < maior)
{
    if(menor%2 !== 0)
    {
        soma+=menor
    }
    menor+=1
}
console.log(soma)