
const offsetWidthSlide = document.getElementById('slide').offsetWidth;
const offsetWidthItem = document.querySelectorAll('.item')[0].offsetWidth;
const itemMargin = 20;
const remainingPhotos = document.querySelectorAll('#slide .item').length - Math.floor((offsetWidthSlide + itemMargin) / (offsetWidthItem + itemMargin));
console.log(document.querySelectorAll('.item').length)
console.log(Math.floor((offsetWidthSlide + itemMargin) / (offsetWidthItem + itemMargin)))
console.log(remainingPhotos);
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

let current = remainingPhotos;
const items = document.querySelectorAll('.item');
let currentPosition = 0;

function updatePositions() {
    let position = currentPosition;
    items.forEach((item) => {
        item.style.left = `${position}px`;
        position += offsetWidthItem + itemMargin;

    });
}

document.getElementById('next').onclick = function () {
    current--;
    btnPrev.style.display = 'block';
    currentPosition -= (offsetWidthItem + itemMargin); // Move left by 220px

    updatePositions();

    if (current == 0) {
        btnNext.style.display = 'none';
    }

}

document.getElementById('prev').onclick = function () {
    current++;
    btnNext.style.display = 'block';

    currentPosition += (offsetWidthItem + itemMargin); // Move right by 220px
    updatePositions();
    if (current == remainingPhotos) {
        btnPrev.style.display = 'none';
    }

}

updatePositions();
