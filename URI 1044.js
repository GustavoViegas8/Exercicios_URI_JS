var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = lines.shift().split(' ')

var numA = parseInt(array.shift())
var numB = parseInt(array.shift())

if (numA%numB === 0 || numB%numA === 0)
{
    console.log('Sao Multiplos')
}
else
{
    console.log('Nao sao Multiplos')
}
