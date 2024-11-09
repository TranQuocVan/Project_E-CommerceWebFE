    document.querySelectorAll('.color-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.color-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(4px)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(0)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
    document.querySelectorAll('.size-box').forEach(box => {
        box.addEventListener('click', function() {
            // Xóa class active từ tất cả các color-box
            document.querySelectorAll('.size-box').forEach(b => b.classList.remove('active'));
            // Thêm class active vào box được click
            this.classList.add('active');
        });
    });

    // Thêm code xử lý thumbnail
    document.querySelectorAll('.thumbnail-item').forEach((thumbnail, index) => {
        // Đặt thumbnail đầu tiên là active
        if (index === 0) {
            thumbnail.classList.add('active');
        }

        thumbnail.addEventListener('click', function() {
            // Lấy src của ảnh thumbnail được click
            const thumbnailSrc = this.querySelector('img').src;
            
            // Cập nhật src của ảnh chính
            const mainImage = document.querySelector('.img-detail img');
            mainImage.src = thumbnailSrc;
            
            // Xử lý active state
            document.querySelectorAll('.thumbnail-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

