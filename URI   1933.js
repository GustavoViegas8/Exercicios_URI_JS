var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = lines.shift().split(' ')
var a = parseInt(num[0])
var b = parseInt(num[1])
if (a == b)
{
    console.log(a)
}
else
{
    if (a > b)
    {
        console.log(a)
    }
    else
    {
        console.log(b)
    }
}