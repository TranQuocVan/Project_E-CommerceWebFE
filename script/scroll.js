const slider = document.querySelector(".slider");
const form = document.querySelector(".form");

let left = 0;
let leftLimit = 0;


let count = 0;
const items = document.querySelectorAll('.item');
const itemWidth = items[0].offsetWidth;
const itemLength = items.length;
const numberImagesOnTheScreen = Math.floor(slider.offsetWidth / itemWidth);
const maxClick = itemLength - numberImagesOnTheScreen - 1;
const content = document.querySelector('.content').offsetWidth + 20;
document.querySelector('#left').onclick = () => {
    count++;
    leftLimit += content;
    form.style.setProperty('--left', `${leftLimit}px`);

    if (count == 0) {
        document.querySelector('#left').style.display = 'none';
    }
    document.querySelector('#right').style.display = 'inline-block';
}
document.querySelector('#right').onclick = () => {
    // if (leftLimit == 0) {
    //     document.querySelector('#scroll').classList.remove("container");
    // // };
    // setTimeout(() => {
    //     leftLimit -= content.offsetWidth;
    //     form.style.setProperty('--left', `${leftLimit}px`);
    // }, 100);
    leftLimit -= content;
    count--;
    form.style.setProperty('--left', `${leftLimit}px`);

    document.querySelector('#left').style.display = 'inline-block';
    if (count <= -maxClick) {
        document.querySelector('#right').style.display = 'none';
    }
};
