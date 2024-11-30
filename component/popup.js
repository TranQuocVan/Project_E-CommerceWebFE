
const timeAnimation = 3;
const popUp = document.querySelector('.popup');
popUp.addEventListener('click', () => {

    const div = document.createElement('div');
    div.id = 'popUp';

    const imgPopupSrc = document.querySelector("#imgPopUp").src;
    const sizeValue = document.querySelector(".sizeOnClicked > span")?.textContent || document.querySelector(".option-size > span").textContent;
    const collorValue = document.querySelector(".optionColorOnClicked > .nameColor ")?.textContent || document.querySelector(".nameColor").textContent;

    console.log(document.querySelector(".sizeOnClicked"))
    console.log(document.querySelector(".optionColorOnClicked"))

    div.innerHTML = `
                <div style="border-bottom: 1px solid black; padding: 10px 0; font-weight: 700;" class="titlePopup">
                    <p style="margin: 0;">Đã thêm vào giỏ hàng</p>
                </div>
                <div style="display: flex;padding: 16px 0;" class="contentPopup"> <img
                        style="width: 65px; height: 90px; object-fit:contain;border-radius: 5px ;background-color: beige;"
                        src="${imgPopupSrc}" alt="">
                    <div style="display: flex;justify-content: space-between; flex-direction: column; padding: 0 10px"
                        class="infoPopup">
                        <h3 style="font-size: 20px; font-weight: 700;">Giày thể thao nam</h3>
                        <div class="" style="font-size: 14px; line-height: 14px; font-weight:500 ">
                            <p style="margin: 0;;">${collorValue}/${sizeValue}</p>
                            <p style="margin: 0;">599.000đ</p>
                        </div>
                    </div>
                </div>
                <div style="padding-bottom: 20px ;">
                    <button id="btnPopup">
                        Xem Giỏ hàng
                    </button>
                </div>`;

    div.style.animation = `popUpDown ${timeAnimation}s`;
    underNavigation.appendChild(div);

    setTimeout(() => {
        div.style.animation = `popUpUp ${timeAnimation}s forwards`;
    }, timeAnimation * 1000);



});
