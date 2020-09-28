var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = lines.shift().split(' ')

var numA = parseFloat(array.shift())
var numB = parseFloat(array.shift())
var numC = parseFloat(array.shift())

var numBC = Math.abs(numB-numC)
var numAC = Math.abs(numA-numC)
var numAB = Math.abs(numA-numB)

var somaBC = numB+numC
var somaAC = numA+numC
var somaAB = numA+numB

if (numBC < numA && numA < somaBC && numAC < numB && numB < somaAC && numAB < numA && numA < somaAB)
{
    console.log(`Perimetro = ${(numA+numB+numC).toFixed(1)}`)
}
else
{
    console.log(`Area = ${(((numA+numB)*numC)/2).toFixed(1)}`)
}