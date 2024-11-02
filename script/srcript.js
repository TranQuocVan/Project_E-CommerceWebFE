document.getElementById('nextBtn').addEventListener('click', function() {
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    if (emailOrPhone) {
        document.getElementById('passwordField').classList.remove('hidden');
    }
});