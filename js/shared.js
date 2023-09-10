// Close/Show mobile navbar
const mobileNavbar = document.querySelector('.mobile-nav');
const showNavbarBtn = document.getElementById('show-navbar-btn');
const closeNavbarBtn = document.getElementById('close-navbar-btn');
const overlayElem = document.querySelector('.overlay');

showNavbarBtn.addEventListener('click' , () => {
    mobileNavbar.classList.add('mobile-nav--shown');
    overlayElem.classList.add('overlay--shown');
})

function closeNavbar() {
    mobileNavbar.classList.remove('mobile-nav--shown');
    overlayElem.classList.remove('overlay--shown');
}

closeNavbarBtn.addEventListener('click' , () => {
    closeNavbar();
})

overlayElem.addEventListener('click' , () => {
    closeNavbar();
})