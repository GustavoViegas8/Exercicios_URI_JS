var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;
var i = 0;
while (i<5)
{
    if (parseInt(lines[i]) > 0)
    {
        positivo++
    }
    if (parseInt(lines[i]) < 0)
    {
        negativo++
    }
    if ((parseInt(lines[i])%2 === 0))
    {
        par++
    }
    if ((parseInt(lines[i])%2 !== 0))
    {
        impar++
    }
    i++
}
console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)