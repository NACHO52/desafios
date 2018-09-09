function validate() {
    if(txtEmail.value === '' || txtEmail.value === null || txtEmail.value == undefined || !txtEmail.value.includes('@') || !txtEmail.value.includes('.com')) {
        txtEmail.classList.add('is-invalid');
        lblEmailWarning.classList.add('warning-message-wrong');
        lblEmailWarning.classList.remove('warning-message-good');
        lblEmailWarning.innerHTML  = '*Por favor ingrese un e-mail válido 🙉';
    } else {
        txtEmail.classList.add('is-valid');
        lblEmailWarning.classList.remove('warning-message-wrong');
        lblEmailWarning.classList.add('warning-message-good');
        lblEmailWarning.innerHTML  = '*Todo está bien 👍';
    }
}
function resetClass() {
    txtEmail.classList.remove('is-invalid');
    txtEmail.classList.remove('is-valid');
    lblEmailWarning.innerHTML  = '';
}