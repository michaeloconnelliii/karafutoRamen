/* ======== Header ======== */
const openImg = document.getElementById('nav-img-open');
const closeImg = document.getElementById('nav-img-close');
const closeBtn = document.querySelector('.nav-close-btn')
const openBtn = document.querySelector('.nav-open-btn')
const nav = document.querySelector('nav');
const carousel = document.querySelector('.carousel');

openImg.addEventListener('click', () => {
    nav.classList.add('nav-open');

    openBtn.classList.add('is-hidden');
    closeBtn.classList.remove('is-hidden');
});

closeImg.addEventListener('click', () => {
    nav.classList.remove('nav-open');

    openBtn.classList.remove('is-hidden');
    closeBtn.classList.add('is-hidden');
});