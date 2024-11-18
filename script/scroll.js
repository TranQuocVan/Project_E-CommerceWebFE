
const offsetWidthSlide = document.getElementById('slide').offsetWidth;
const offsetWidthItem = document.querySelectorAll('.item')[0].offsetWidth;
const itemMargin = 20;
const remainingPhotos = document.querySelectorAll('#slide .item').length - Math.floor((offsetWidthSlide + itemMargin) / (offsetWidthItem + itemMargin));

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

// Cho slide2
const offsetWidthSlide2 = document.getElementById('slide2').offsetWidth;
const offsetWidthItem2 = document.querySelectorAll('#slide2 .item')[0].offsetWidth;
const remainingPhotos2 = document.querySelectorAll('#slide2 .item').length - Math.floor((offsetWidthSlide2 + itemMargin) / (offsetWidthItem2 + itemMargin));

const btnNext2 = document.getElementById('next2');
const btnPrev2 = document.getElementById('prev2');

let current2 = remainingPhotos2;
const items2 = document.querySelectorAll('#slide2 .item');
let currentPosition2 = 0;

function updatePositions2() {
    let position = currentPosition2;
    items2.forEach((item) => {
        item.style.left = `${position}px`;
        position += offsetWidthItem2 + itemMargin;
    });
}

btnNext2.onclick = function () {
    current2--;
    btnPrev2.style.display = 'block';
    currentPosition2 -= (offsetWidthItem2 + itemMargin);

    updatePositions2();

    if (current2 == 0) {
        btnNext2.style.display = 'none';
    }
}

btnPrev2.onclick = function () {
    current2++;
    btnNext2.style.display = 'block';

    currentPosition2 += (offsetWidthItem2 + itemMargin);
    updatePositions2();
    if (current2 == remainingPhotos2) {
        btnPrev2.style.display = 'none';
    }
}

updatePositions2();