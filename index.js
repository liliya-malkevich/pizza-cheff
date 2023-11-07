// const hamburger = document.querySelector(".hamburger")
// const nav_menu = document.querySelector(".nav-menu")

// document.addEventListener('mouseup', function (e) {
//   const menu = document.querySelector('.container')
//   const menuItem = menu.childNodes
//   if (e.target != menu && e.target != menuItem) {
//   hamburger.addEventListener("click",()=>{
//   hamburger.classList.toggle("active");
//   nav_menu.classList.toggle("active");
//   })
//     hamburger.classList.remove("active");
//     nav_menu.classList.remove("active");

//   }
// })

// document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   nav_menu.classList.remove("active");
// }))

new WOW().init();

const form = document.getElementById('order-form');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/order');
    xhr.send(formData);
    popup.style.display = 'block';
  } else {
    errorMessage.textContent = 'Пожалуйста, заполните все поля корректно';
  }
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

form.addEventListener('input', () => {
  errorMessage.textContent = '';
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
