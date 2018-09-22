$(document).ready(function(){
    $('.advertencia').css('color', 'crimson');
    $('#btnSend').attr('disabled', true);;
    $('#txtName').click(function(){
        classEliminator(this);
    });
    $('#txtComentario').click(function(){
        classEliminator(this);
    });
    $('#txtEmail').click(function(){
        classEliminator(this);
    });
    $('#txtName').blur(function(){
        textValidator(this);
    });
    $('#txtComentario').blur(function(){
        textValidator(this);
    });
    $('#txtEmail').one('blur', oneValidator);
    $('#txtEmail').on('keyup', emailValidator)
    $('#btnSend').click(function() {
        $('#txtName').val('');
        $('#txtEmail').val('');
        $('#txtComentario').val('');
        $('#txtName').removeClass('is-valid');
        $('#txtEmail').removeClass('is-valid');
        $('#txtComentario').removeClass('is-valid');
        $('#btnSend').attr('disabled', true);
        alert('Se ha enviado la información. 👍');
    });
    $('#exampleModal').on('shown.bs.modal', function () {
        $('#btnSend').trigger('focus')
      })
});


function classEliminator(event){
    $('#'+event.id).removeClass('is-invalid').removeClass('is-valid');
}
function textValidator(event){
    var nodo = $('#'+event.id);
    if(nodo.val() === "") {
        nodo.removeClass('is-valid').addClass('is-invalid');
        $('#sml' + event.id).removeClass('oculto');
    }else {
        nodo.removeClass('is-invalid').addClass('is-valid');
        $('#sml' + event.id).addClass('oculto');
    }
    if($('.is-valid').length === 3)
    {
        $('#btnSend').attr('disabled', false);;
    }
}
function emailValidator(){
    var nodo = $('#txtEmail');
    var texto = $('#smltxtEmail');
    nodo.removeClass('is-valid').addClass('is-invalid');
    if(nodo.val() === '') {
        texto.text('*El campo es requerido');
    } else if(nodo.val().includes('@') === false && nodo.val().includes('.') === false) {
        texto.text('*El campo debe contener arroba (@) y punto (.)');
    } else if(!nodo.val().includes('@')) {
        texto.text('*El campo debe contener arroba (@)');
    } else if(!nodo.val().includes('.')) {
        texto.text('*El campo debe contener punto (.)');
    } else {
        nodo.removeClass('is-invalid').addClass('is-valid');
        texto.text('');
    }
    if($('.is-valid').length === 3)
    {
        $('#btnSend').attr('disabled', false);;
    }
}
function oneValidator(){
    var nodo = $('#txtEmail');
    if(nodo.val() === "" || nodo.val().includes('@') === false && nodo.val().includes('.') === false) {
        nodo.removeClass('is-valid').addClass('is-invalid');
        if($('#smltxtEmail').text() === '')
        {
            $('#smltxtEmail').text('*El campo es requerido');
        }
    }else {
        nodo.removeClass('is-invalid').addClass('is-valid');
        $('#smltxtEmail').text('');
    }
    if($('.is-valid').length === 3)
    {
        $('#btnSend').attr('disabled', false);;
    }
}