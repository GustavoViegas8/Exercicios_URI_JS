var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [pontoX, pontoY] = lines.shift().split(' ')

pontoX = parseFloat(pontoX)
pontoY = parseFloat(pontoY)

if (pontoX > 0 && pontoY > 0)
{
    console.log('Q1')
}
else if (pontoX < 0 && pontoY > 0)
{
    console.log('Q2')
}
else if (pontoX < 0 && pontoY < 0)
{
    console.log('Q3')
}
else if (pontoX > 0 && pontoY < 0)
{
    console.log('Q4')
}
else if (pontoX !== 0 && pontoY === 0)
{
    console.log('Eixo X')
}
else if (pontoX === 0 && pontoY !== 0)
{
    console.log('Eixo Y')
}
else if (pontoX === 0 && pontoY === 0)
{
    console.log('Origem')
}
