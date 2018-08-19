
var operacion = prompt('Seleccione una operación: sum, res, mul o div.').toLowerCase();
var result = 0;

if(operacion != 'sum' && operacion != 'res' && operacion != 'div' && operacion != 'mul')
{
    do
    {
        console.log(' Por favor elija entre: sum, res, mul o div.');
        var operacion = prompt('Seleccione una operación: sum, res, mul o div.').toLowerCase();
    }while(operacion != 'sum' && operacion != 'res' && operacion != 'div' && operacion != 'mul')
}

var num1 = parseInt(prompt('Ingrese el primer número.'));
if(isNaN(num1))
{
    do
    {
        console.log('Por favor ingrese un valor númerico.');
        var num1 = parseInt(prompt('Ingrese el primer número.'));
    }while (isNaN(num1))
}
var num2 = parseInt(prompt('Ingrese el segundo número.'));
if(isNaN(num2))
{
    do
    {
        console.log('Por favor ingrese un valor númerico.');
        var num2 = parseInt(prompt('Ingrese el segundo número.'));
    }while (isNaN(num2))
}

if(operacion === 'sum') 
{
    result = num1 + num2;
}
else if(operacion === 'res')
{
    result = num1 - num2;
}
else if(operacion === 'mul')
{
    result = num1 * num2;
}
else if(operacion === 'div')
{
    if(num2 <= 0)
    {
        do {
            num2 = parseInt(prompt('Por favor ingrese un número mayor a 0.'));
        } while(num2 <= 0);
    }
    else
    {
        result = num1 / num2;
    }
}
console.log('El resultado es ' + result);
alert('El resultado es: ' + result);