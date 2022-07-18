//js for hamburger animation
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('#navbar-links');
const hamburgerLine = document.querySelectorAll('.line');
const navlinks_item = document.querySelectorAll('.navbar-links a');
const hero_content = document.querySelector(".hero_main");
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    hamburgerLine[0].classList.toggle('open0');
    hamburgerLine[1].classList.toggle('close');
    hamburgerLine[2].classList.toggle('open1');
    for (item of navlinks_item) {
        item.classList.toggle('open');
    }
    hero_content.classList.toggle('open');
    body.classList.toggle('open');
});

navlinks.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    hamburgerLine[0].classList.toggle('open0');
    hamburgerLine[1].classList.toggle('close');
    hamburgerLine[2].classList.toggle('open1');
    for (item of navlinks_item) {
        item.classList.toggle('open');
    }
    hero_content.classList.toggle('open');
    body.classList.toggle('open');
});
