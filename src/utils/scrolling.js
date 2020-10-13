import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ once: true, duration: 800 });

const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');
const scrollTriggers = document.querySelectorAll('[data-scroll]');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

scrollTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('nav--open');
    const href = trigger.getAttribute('href');
    window.location = href;
  });
});
