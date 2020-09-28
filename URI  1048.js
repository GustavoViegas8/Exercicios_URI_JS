var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var reajuste = 0;
var percentual = 0;

if (salario <= 400)
{
    percentual = 15
}
else if (salario >= 400.01 &&  salario <= 800.00)
{
    percentual = 12
}
else if (salario >= 800.01 && salario <= 1200.00)
{
    percentual = 10
}
else if (salario >= 1200.01 && salario <= 2000.00)
{
    percentual = 7
}
else
{
    percentual = 4
}
reajuste = (percentual*salario)/100
console.log(`Novo salario: ${(reajuste + salario).toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)
