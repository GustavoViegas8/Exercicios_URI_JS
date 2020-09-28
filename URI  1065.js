var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = 0;
for (var i = 0; i < lines.length; i++)
{
    if (parseInt(lines[i])%2 === 0)
    {
        contador++;
    }
}
console.log(`${contador} valores pares`);

