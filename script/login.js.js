const name = document.getElementById('name');
const inputName = document.getElementById('inputName');
const icon = document.querySelector('.fa-circle-right');
const inputPass = document.getElementById('inputPass');
name.addEventListener('focus', () => {
    inputName.style.border = '1px solid #007bff';
    icon.style.top = '50%';

});
name.addEventListener('blur', () => {
    inputName.style.border = '1px solid #ced4da';
    icon.style.top = 'calc(50% - 10px)';
});

icon.addEventListener('click', () => {
    if (name.value != '') {
        inputPass.style.display = 'block';
    }

});
