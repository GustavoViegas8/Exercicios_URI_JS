var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota = parseInt(lines.shift())

if (nota === 0)
{
    console.log('E')
}
else if (nota >= 1 && nota <= 35)
{
    console.log('D')
}
else if (nota >= 36 && nota <= 60)
{
    console.log('C')
}
else if (nota >= 61 && nota <= 85)
{
    console.log('B')
}
else    
{
    console.log('A')
}