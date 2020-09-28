var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = lines[0].split('')
var ponto = num.indexOf('.')
var inicio = num.splice(ponto+1, num.length)
num.pop()
var ultimo = ''
var primeiro = ''
for (var i = 0; i < num.length; i++)
{
    ultimo = ultimo + num[i]
}
if(inicio[0] === '0')
{
    inicio.shift()
}
for (i = 0; i < inicio.length; i++)
{
    primeiro = primeiro + inicio[i]
}
console.log(`${primeiro}.${ultimo}`)
