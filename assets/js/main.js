var sideHead = document.querySelector('.header-nav__side');
var items = document.querySelectorAll('.header-nav__link');

function indicator(e) {
    sideHead.style.left = e.offsetLeft + 'px';
    sideHead.style.width = e.offsetWidth + 'px';
}

items.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
})