var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [num1, num2, num3, num4] = lines.shift().split(' ')
var notaExame = parseFloat(lines.shift())

var media = (num1*2 + num2*3 + num3*4 + num4*1)/10
console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7)
{
    console.log('Aluno aprovado.')
}
else if (media < 5)
{
    console.log('Aluno reprovado.')
}
else if (media >= 5 && media < 7)
{
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

    let notaFinal = (media + notaExame) / 2
    
    if (notaFinal >= 5)
    {
        console.log('Aluno aprovado.')
        console.log(`Media final: ${notaFinal.toFixed(1)}`)
    }
    else
    {
        console.log('Aluno reprovado.')
        console.log(`Media final: ${notaFinal.toFixed(1)}`)
    }
}