//Функция для затемнения части хедера при прокрутке страницы
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.header__nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } 
    else {
        nav.classList.remove('scrolled');
    }
});


//Функция для выплывающего бургер-меню
const burger = document.querySelector("#burger");
const popup = document.getElementById("popup");
const body = document.body;

const menu = document.getElementById("menu").cloneNode(1);

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    e.preventDefault();

    popup.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

const renderPopup = () => {
popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

const closeOnClick = () => {
    popup.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("noscroll");
}


