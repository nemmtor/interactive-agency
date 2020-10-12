const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');
const scrollTriggers = document.querySelectorAll('[data-scroll]');

window.addEventListener('load', (event) => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.classList.add('loader-wrapper--faded');
});

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

scrollTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    const href = trigger.getAttribute('href');
    window.location = href;
  });
});
