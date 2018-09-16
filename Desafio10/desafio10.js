$('#txtEmail').click(resetClass);
$('#txtEmail').blur(validate);
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validate() {
    if(validateEmail($('#txtEmail').val())) {
        $('#txtEmail').addClass('is-valid');
        $('#lblEmailWarning').addClass('warning-message-good');
        $('#lblEmailWarning').removeClass('warning-message-wrong');
        $('#lblEmailWarning').text('*Todo está bien 👍');
    } else {
        $('#txtEmail').addClass('is-invalid');
        $('#lblEmailWarning').addClass('warning-message-wrong');
        $('#lblEmailWarning').removeClass('warning-message-good');
        $('#lblEmailWarning').text('*Por favor ingrese un e-mail válido 🙉');
    }
}
function resetClass() {
    $('#txtEmail').removeClass('is-invalid');
    $('#txtEmail').removeClass('is-valid');
    $('#lblEmailWarning').text('');
}