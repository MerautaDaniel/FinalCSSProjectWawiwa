const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navigation_list');
const menu_item = document.querySelectorAll('.navigation_item a');
const header = document.querySelector('.primary-header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});