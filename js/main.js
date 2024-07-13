/*document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", function(){
        document.querySelector("navigation").classList.toggle("open")
    })
})

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}*/

// document.addEventListener('DOMContentLoaded', function() {
//   const burgerMenu = document.querySelector('.burger-menu');
//   const menuItems = document.querySelector('.menu-items');

//   burgerMenu.addEventListener('click', function() {
//     if (burgerMenu.classList.contains('active')) {
//       burgerMenu.classList.remove('active');
//       menuItems.classList.remove('active');
//     } else {
//       burgerMenu.classList.add('active');
//       menuItems.classList.add('active');
//     }
//   });
//     // Закрытие меню при клике на ссылку
//   const menuLinks = document.querySelectorAll('.menu-items a');
//     menuLinks.forEach(function(link) {
//       link.addEventListener('click', function() {
//         menuItems.classList.remove('active');
//       });
//     });
// });
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