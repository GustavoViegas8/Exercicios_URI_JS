var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var i = 1; i <= 10; i++)
{
    console.log(`${i} x ${parseInt(lines)} = ${i*parseInt(lines)}`)
}