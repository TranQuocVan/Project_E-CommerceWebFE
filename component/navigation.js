const data = {
    shop: [
        {
            col1: 'Mua hàng',
            col1List: [
                { name: 'Mua Sản Phẩm Mới Nhất' },
                { name: 'Giày' },
                { name: 'Dép' },
                { name: 'Thương Hiệu' },
                { name: 'Phụ kiện' }
            ]
        },
        {
            col2: 'Chính sách',
            col2List: [
                { name: 'Chính sách bảo mật' },
                { name: 'Chính sách vận chuyển' },
                { name: 'Chính sách đổi trả' }
            ]
        },
        {
            col3: 'Liên hệ',
            col3List: [
                { name: 'Liên hệ hotline' },
                { name: 'Liên hệ email' }
            ]
        }
    ],
    shoe: [
        {
            col1: 'Khám phá các loại giày',
            col1List: [
                { name: 'Giày thể thao' },
                { name: 'Giày lười' },
                { name: 'Giày tây' },
                { name: 'Giày búp bê' },
                { name: 'Giày cao gót' }
            ]
        },
        {
            col2: 'Mua giày',
            col2List: [
                { name: 'Giày nam' },
                { name: 'Giày nữ' },
                { name: 'Giày trẻ em' }
            ]
        },
        {
            col3: 'Thương hiệu',
            col3List: [
                { name: 'Adidas' },
                { name: 'Nike' },
                { name: 'Converse' },
                { name: 'Puma' },
                { name: 'Vans' }
            ]
        }
    ]
};




const renderNavigation = () => {
    document.querySelector('nav').innerHTML = `<div style="position: fixed; z-index: 2;" class="container-fluid main-bg-color">
            <div class="container">
                <div style="font-size: 20px;" class="row">
                    <div class="col-md-9 flex-align-items-center dropdown">
                        <span class="navigation"><a href="index.html"><img style="width: 20px;" src="assets/logo.svg"
                                    alt="logo"></a></span>
                        <span class="navigation" id="shop"><a href="#">Cửa hàng</a></span>
                        <span class="navigation" id="shoe"><a href="#">Giày</a></span>
                        <span class="navigation"><a href="#">Dép</a></span>
                        <span class="navigation"><a href="#">Sản phẩm khuyến mãi</a></span>
                        <span class="navigation"><a href="#">Sản phẩm mới ra mắt</a></span>
                        <span class="navigation"><a href="#">Sản phẩm dành cho bé</a></span>
                    </div>
                    <div class="col-md-3 flex-align-items-center" style="justify-content: end;">
                        <span class="navigation"><a href="login.html">Log in</a></span>
                        <span class="navigation"><a href="logout.html">Log out</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div style="z-index: 1;" class="container-fluid content-when-hover main-bg-color"></div>`
        ;
};
renderNavigation();

const contentWhenHover = document.querySelector('.content-when-hover');
const underNavigation = document.querySelector('.under-navigation');
const dropDown = () => {
    contentWhenHover.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <p class="content-when-hover-p">${item[0].col1}</p>
                <div class="flex-direction-column">
                    ${item[0].col1List.map(subitem => `<span><a class="content-when-hover-a-first" href="#">${subitem.name}</a></span>`).join('')}
                </div>
            </div>
            <div class="col-md-2">
                <p class="content-when-hover-p">${item[1].col2}</p>
                <div class="flex-direction-column">
                    ${item[1].col2List.map(subitem => `<span><a class="content-when-hover-a" href="#">${subitem.name}</a></span>`).join('')}
                </div>
            </div>
            <div class="col-md-2">
                <p class="content-when-hover-p">${item[2].col3}</p>
                <div class="flex-direction-column">
                    ${item[2].col3List.map(subitem => `<span><a class="content-when-hover-a" href="#">${subitem.name}</a></span>`).join('')}
                </div>
            </div>
        </div>
    </div>`;
};
let item = data.shop;
dropDown();

document.querySelector('#shop').addEventListener('mouseenter', () => {
    item = data.shop;
    dropDown();
});

document.querySelector('#shoe').addEventListener('mouseenter', () => {
    item = data.shoe;
    dropDown();
});

let setOpacity;
let hoverDelay;
let isHovering = false; // Track if currently hovering
const dropdown = document.querySelector('.dropdown');


dropdown.addEventListener('mouseenter', () => {
    // Clear any previous hover timeout and mark as hovering
    clearTimeout(hoverDelay);
    isHovering = true;

    // Set a delay of 10ms before displaying contentWhenHover
    hoverDelay = setTimeout(() => {
        if (isHovering) {
            contentWhenHover.style.display = 'block';
            contentWhenHover.style.animation = 'content-when-hover-animation 0.5s ease-in-out';
            underNavigation.style.animation = 'opacity 0.5s ease-in-out';

            // Apply opacity after animation begins
            setOpacity = setTimeout(() => {
                underNavigation.style.opacity = 0.5;
            }, 500);
        }
    }, 10);
});

dropdown.addEventListener('mouseleave', () => {
    // Clear timeouts and mark as not hovering
    clearTimeout(hoverDelay);
    clearTimeout(setOpacity);
    isHovering = false;

    // Hide contentWhenHover immediately if it’s visible
    contentWhenHover.style.animation = 'content-when-endHover-animation 0.3s ease-in-out';
    underNavigation.style.animation = 'endOpacity 0.3s ease-in-out';

    // Ensure display is set to 'none' after the end animation
    setTimeout(() => {
        if (!isHovering) {
            contentWhenHover.style.display = 'none';
            underNavigation.style.opacity = 1;
        }
    }, 300);
});
