
var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]
var input = prompt('Ingrese un nombre').toLowerCase();

console.log(search(input, studentsList));

function search(name, list)
{
    for(var a = 0; a < list.length; a++)
    {
        if(list[a].firstName.toLowerCase() === name || list[a].lastName.toLowerCase() === name) {
          return 'Se encontró al estudiante en la posición ' + a;  
        }
    }
    return 'No se pudo encontrar al estudiante.';
}