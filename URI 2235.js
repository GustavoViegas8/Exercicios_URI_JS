var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let array = lines.shift().split(' ')
let a = parseInt(array[0])
let b = parseInt(array[1])
let c = parseInt(array[2])

if((a-b === 0) || (a-c === 0) || (b-c === 0))
{
    console.log('S')
}
else
{
    if((a+b-c === 0) || (b-a+c === 0) || (c-a+b === 0))
    {
        console.log('S')
    }
    else if ((a-b-c === 0) || (b-a-c === 0) || (c-a-b === 0))
    {
        console.log('S')
    }
    else
    {
        console.log('N')
    }
}