var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = lines.shift().split(' ')

var numA = parseFloat(array[0]), numB = parseFloat(array[1]), numC = parseFloat(array[2])
var numAA = Math.max(numA, Math.max(numB, numC))
var numBB = 0
var numCC = 0

if (numAA == numA) {
    numBB = Math.max(numB, numC);
    numCC = Math.min(numB, numC);
}
if (numAA == numB) {
    numBB = Math.max(numA, numC);
    numCC = Math.min(numA, numC);
}
if (numAA == numC) {
    numBB = Math.max(numB, numA);
    numCC = Math.min(numB, numA);
}

if (numAA >= (numBB + numCC)) 
{
    console.log('NAO FORMA TRIANGULO')
} 
else if (numAA * numAA > ((numBB * numBB) + (numCC * numCC))) 
{
    console.log('TRIANGULO OBTUSANGULO')
}
if (numAA * numAA == ((numBB * numBB) + (numCC * numCC))) 
{
    console.log('TRIANGULO RETANGULO')
}

if (numAA * numAA < ((numBB * numBB) + (numCC * numCC))) 
{
    console.log('TRIANGULO ACUTANGULO')
}
if ((numAA == numBB) && numAA == numCC)
{
    console.log('TRIANGULO EQUILATERO')
}
if (((numAA == numBB) && (numAA != numCC)) || ((numAA == numCC) && (numAA != numBB)) || ((numBB == numCC) && (numBB != numAA))) 
{
    console.log('TRIANGULO ISOSCELES')
}
