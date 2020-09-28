var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [numA, numB, numC, numD] = lines.shift().split(' ')

if (numA % 2 == 0)
{
    if (numC > 0 && numD > 0)
    {
        if ((numC + numD) > (numA + numB))
        {
            if (numB > numC && numD > numA)
            {
                console.log('Valores aceitos')
            }
            else
            {
                erro()
            }
        }
        else
        {
            erro()
        }
    }
    else
    {
        erro()
    }
}
else
{
   erro()
}

function erro (mesagem)
{
    console.log('Valores nao aceitos')
}