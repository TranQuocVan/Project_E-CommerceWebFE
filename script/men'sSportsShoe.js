//

    // Lắng nghe sự kiện click vào nút tạm dừng
    // Lắng nghe sự kiện cuộn trang
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); // Lấy vị trí cuộn trang

        // Tính toán tỷ lệ thu nhỏ của video
        var scale = 1 - (scroll / 6500); // Điều chỉnh giá trị 1000 theo ý muốn để thay đổi tốc độ

        // Đảm bảo không thu nhỏ quá mức
        if (scale < 0.5) {
            scale = 0.5; // Giới hạn tỷ lệ thu nhỏ không nhỏ hơn 50%
        }

        // Áp dụng tỷ lệ thu nhỏ cho video
        $('.video').css('transform', 'scale(' + scale + ')');

        // Hiển thị hoặc ẩn nút khi cuộn trang
        if (scroll > 100) { // Điều chỉnh giá trị này theo nhu cầu của bạn
            $('#pauseButton').addClass('show').removeClass('hide');
        } else {
            $('#pauseButton').addClass('hide').removeClass('show');
        }
    });

    // Lắng nghe sự kiện click vào nút tạm dừng
document.getElementById('pauseButton').addEventListener('click', function () {
    var video = document.getElementById('videoElement');

    if (video.paused) {
        video.play(); // Nếu video đang dừng, phát lại video
        this.innerHTML = '<i class="fas fa-pause"></i>'; // Đổi biểu tượng thành tạm dừng
    } else {
        video.pause(); // Nếu video đang phát, tạm dừng video
        this.innerHTML = '<i class="fas fa-play"></i>'; // Đổi biểu tượng thành phát
    }
});

// Thêm sự kiện click vào video để dừng hoặc phát lại video
document.getElementById('videoElement').addEventListener('click', function () {
    var video = this;
    var pauseButton = document.getElementById('pauseButton');

    if (video.paused) {
        video.play(); // Nếu video đang dừng, phát lại video
        pauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Đổi biểu tượng thành tạm dừng
    } else {
        video.pause(); // Nếu video đang phát, tạm dừng video
        pauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Đổi biểu tượng thành phát
    }
});


