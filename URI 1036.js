var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.shift().split(' ')
var numA = parseFloat(lines[0])
var numB = parseFloat(lines[1])
var numC = parseFloat(lines[2])

var delta = Math.sqrt(Math.pow(numB, 2) - (4.0 * numA * numC))

if ( numA > 0.0 && numB > 0.0 && numC > 0.0 && delta > 0.0 )
{
    var r1 = parseFloat((-numB + delta) / (2.0 * numA))
    var r2 = parseFloat((-numB - delta) / (2.0 * numA))
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}
else
{
    console.log('Impossivel calcular')
}
