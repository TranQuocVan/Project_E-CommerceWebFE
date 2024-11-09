document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', function() {
        // Xóa lớp 'selected' từ tất cả các .color-box
        document.querySelectorAll('.color-box').forEach(b => b.classList.remove('selected'));

        // Thêm lớp 'selected' vào phần tử được nhấn
        this.classList.add('selected');
    });
});
