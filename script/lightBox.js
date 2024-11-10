const thumbnails = document.querySelectorAll('#slide .item img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function(event) {
        event.preventDefault();

        const imageSrc = this.src;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imageSrc;

        const imageText = this.getAttribute('data-text');
        const modalText = document.getElementById('modalText');
        modalText.textContent = imageText;
    });
});
