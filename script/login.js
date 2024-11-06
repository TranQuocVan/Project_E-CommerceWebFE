const nameLogin = document.getElementById('nameLogin');
const inputName = document.getElementById('inputName');
const icon = document.querySelector('.fa-circle-right');
const inputPass = document.getElementById('inputPass');
nameLogin.addEventListener('focus', () => {
    inputName.style.border = '1px solid #007bff';
    icon.style.top = '50%';

});
nameLogin.addEventListener('blur', () => {
    inputName.style.border = '1px solid #ced4da';
    icon.style.top = 'calc(50% - 10px)';
});

icon.addEventListener('click', () => {
    if (nameLogin.value != '') {
        inputPass.style.display = 'block';
        document.querySelector("#btnLogin").style.display = 'block';
        document.querySelector("#alterClick").style.display = 'block';
    }

});
