var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = parseInt(lines)

for (var i = 0; i < 6;)
{
    if(num%2 !== 0)
    {
        console.log(num)
        i++
    }
    num++
}
