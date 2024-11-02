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


document.querySelector('.dropdown').addEventListener('mouseenter', () => {
    contentWhenHover.style.display = 'block';
    contentWhenHover.style.animation = 'content-when-hover-animation 0.5s ease-in-out';
    underNavigation.style.animation = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        underNavigation.style.opacity = 0.5, 450
    });
});

document.querySelector(' .content-when-hover').addEventListener('mouseleave', function () {
    contentWhenHover.style.animation = 'content-when-endHover-animation 0.3s ease-in-out ';
    document.querySelector('.under-navigation').style.animation = 'endOpacity 0.3s ease-in-out ';
    setTimeout(() => {
        contentWhenHover.style.display = 'none';
        document.querySelector('.under-navigation').style.opacity = 1;
        flag = false;
    }, 300);
}
);