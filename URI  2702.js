var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array0 = lines.shift().split(' ')
var array1 = lines.shift().split(' ')

var frango = parseInt(array0[0]) - parseInt(array1[0])
var bife = parseInt(array0[1]) - parseInt(array1[1])
var massa = parseInt(array0[2]) - parseInt(array1[2])

var resto = 0

if (frango < 0)
{
    resto += frango
}
if (bife < 0)
{
    resto += bife
}
if (massa < 0)
{
    resto += massa
}

console.log(Math.abs(resto))