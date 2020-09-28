var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = 0
var media = 0
for (var i = 0; i < lines.length; i++)
{
    if (parseFloat(lines[i]) >0)
    {
        contador++
        media += parseFloat(lines[i])
    }
}
console.log(`${contador} valores positivos`)
console.log((media/contador).toFixed(1))
