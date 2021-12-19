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

/* Stop playing nav transition momentarily on viewport resize. 
   Source: https://stackoverflow.com/questions/63861504/pure-css-hamburger-menu-shows-up-when-resizing-viewport-before-disappearing */
   (function () {
    const classes = document.body.classList;
    let timer = null;
    window.addEventListener('resize', function () {
      if (timer){
        clearTimeout(timer);
        timer = null;
      } else {
        classes.add('stop-transition');
      }
      timer = setTimeout(() => {
        classes.remove('stop-transition');
        timer = null;
      }, 100);
    });
  })();