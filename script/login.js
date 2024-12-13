const nameLogin = document.getElementById('nameLogin');
const inputName = document.getElementById('inputName');
const icon = document.querySelector('#icon');
const inputPass = document.getElementById('inputPass');
const btnLogin = document.getElementById('btnLogin');

nameLogin.addEventListener('focus', () => {
    inputName.style.border = '1px solid #007bff';
    icon.style.top = '50%';
});

nameLogin.addEventListener('blur', () => {
    inputName.style.border = '1px solid #ced4da';
    icon.style.top = 'calc(50% - 10px)';
});

// Xử lý sự kiện khi nhấn vào biểu tượng "icon" để hiển thị trường mật khẩu và nút đăng nhập
icon?.addEventListener('click', () => {
    if (nameLogin.value != '') {
        inputPass.style.display = 'block';
        btnLogin.style.display = 'block';
        document.querySelector("#alterClick").style.display = 'block';
    }
});

// Xử lý khi nhấn nút Đăng nhập
btnLogin?.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn việc gửi form nếu có (trong trường hợp form đang được submit)
    const username = nameLogin.value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(`Username: ${username}, Password: ${password}`); // Kiểm tra giá trị tài khoản và mật khẩu

    // Kiểm tra tài khoản và mật khẩu
    if (username === 'admin' && password === '123') {
        console.log('Đăng nhập thành công với admin');
        localStorage.setItem('isLogin', 'true');
        window.location.href = 'admin.html'; // Chuyển đến trang admin
    } else if (username !== '' && password !== '') {
        console.log('Đăng nhập thành công cho người dùng khác');
        localStorage.setItem('isLogin', 'true');
        window.location.href = 'index.html'; // Chuyển đến trang chủ hoặc trang khác tùy theo nhu cầu
    } else {
        // Hiển thị lỗi nếu nhập thông tin không hợp lệ
        alert("Tài khoản hoặc mật khẩu không đúng!");
    }
});
