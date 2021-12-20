/* ======== Header ======== */
const openImg = document.getElementById('nav-img-open');
const closeImg = document.getElementById('nav-img-close');
const closeBtn = document.querySelector('.nav-close-btn')
const openBtn = document.querySelector('.nav-open-btn')
const nav = document.querySelector('nav');
const carousel = document.querySelector('.carousel');

function openNav() {
  nav.classList.add('nav-open');

  openBtn.classList.add('is-hidden');
  closeBtn.classList.remove('is-hidden');
}

function closeNav() {
  nav.classList.remove('nav-open');

  openBtn.classList.remove('is-hidden');
  closeBtn.classList.add('is-hidden');
}

openImg.addEventListener('click', openNav);
closeImg.addEventListener('click', closeNav);

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

/* if user resizes browser window from mobile to desktop while nav is open, close the nav */
window.addEventListener('resize', () => {
  if(window.innerWidth >= 725) {
    closeNav();
  }
});