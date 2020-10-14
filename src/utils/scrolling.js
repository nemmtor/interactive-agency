import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true, duration: 800 });

const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav");
const scrollTriggers = document.querySelectorAll("[data-scroll]");

burger.addEventListener("click", () => {
  if (nav.classList.contains("nav--open")) {
    nav.classList.remove("nav--open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open navigation");
  } else {
    nav.classList.add("nav--open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close navigation");
  }
});

scrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("nav--open");
    const href = trigger.getAttribute("href");
    window.location = href;
  });
});
