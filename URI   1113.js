var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var i = 0; i < lines.length; i++)
{
    let array = lines[i].slice().split(' ')
    let numA = parseInt(array[0])
    let numB = parseInt(array[1])
    if (numA > numB)
    {
        console.log('Decrescente')
    }
    else if (numB > numA)
    {
        console.log('Crescente')
    }
}
