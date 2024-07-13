const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    menu.classList.remove('active');
  });
});