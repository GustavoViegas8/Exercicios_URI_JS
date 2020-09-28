var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(' ')
var cdgItem = parseFloat(entrada.shift())
var qtdItem = parseFloat(entrada.shift())

var array = [4.00, 4.50, 5.00, 2.00, 1.50]

for (i = 1; i <= 6; i++)
{
    if( i == cdgItem)
    {
        var preco = array[i-1] * qtdItem
    }
}

console.log(`Total: R$ ${preco.toFixed(2)}`)