const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if(headerHeight < scrollY) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - scrollY / homeHeight;
})

const arrowUp = document.querySelector('.arrow-up');
const arrowUpHeight = homeHeight / 2;
document.addEventListener('scroll', () => {
  if(arrowUpHeight < scrollY) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

const navbarToggle = document.querySelector('.header__toggle');
const navbarMenu = document.querySelector('.header__menu');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

const navItem = document.querySelectorAll('.header__menu__item');
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});



