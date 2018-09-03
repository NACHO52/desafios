var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }

function studentDetails(student) {
  var mainNode = document.getElementById('mainNode');
  var ulNode = document.createElement('ul');
  mainNode.appendChild(ulNode);
  var liNode = document.createElement('li');
  liNode.className = "list-group-item";
  liNode.id = student['dni'];
  ulNode.appendChild(liNode);
  var h1Node = document.createElement('h1');
  h1Node.innerHTML = student['firstName'] + ' ' + student['lastName'];
  liNode.appendChild(h1Node);
  var h3Node = document.createElement('h3');
  h3Node.innerHTML = 'DNI: ' + student['dni'];
  liNode.appendChild(h3Node);
  var pNode = document.createElement('p');
  pNode.innerHTML = 'E-mail: ' + student['email'];
  liNode.appendChild(pNode);
}

studentDetails(student);