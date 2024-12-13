const btnLogOut = document.getElementById('btnLogOut');

btnLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLogin', false);
    window.location.href = 'index.html';
});