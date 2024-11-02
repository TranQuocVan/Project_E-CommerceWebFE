const slider = document.querySelector(".slider");
const form = document.querySelector(".form");
let mouseDownAt = 0;
let left = 0;



let leftLimit = 0;
const content = document.querySelector('.content').offsetWidth + 20;
document.querySelector('#left').onclick = () => {

    leftLimit += content;
    form.style.setProperty('--left', `${leftLimit}px`);

    if (leftLimit == 0) {
        document.querySelector('#left').style.display = 'none';
    }
    document.querySelector('#right').style.display = 'block';
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
    form.style.setProperty('--left', `${leftLimit}px`);

    document.querySelector('#left').style.display = 'block';
    if (leftLimit <= -800) {
        document.querySelector('#right').style.display = 'none';
    }
};

