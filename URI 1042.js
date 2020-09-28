var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = lines.shift().split(' ')

var num1 = parseInt(array.shift())
var num2 = parseInt(array.shift())
var num3 = parseInt(array.shift())

array = [num1, num2, num3]

var maior = Math.max(num1, num2, num3)
var menor = Math.min(num1, num2, num3)
var medio

for (var i = 0; i < array.length; i++) {
    if ( array[i] > menor && array[i] < maior ) {
       medio = array[i]
    }
 }
console.log(menor)
console.log(medio)
console.log(maior)
console.log('')
console.log(array[0])
console.log(array[1])
console.log(array[2])