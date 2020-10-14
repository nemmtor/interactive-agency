const normalversion = document.querySelector("[data-normalversion]");
const content = document.querySelector(".content");
const wgaBar = document.querySelector(".wga-bar");
const wgaToggler = document.querySelector(".wgatoggler");

const html = document.querySelector("html");

const contrastTogglers = document.querySelectorAll("[data-contrast]");
const fontTogglers = document.querySelectorAll("[data-fontsize]");
const spacingTogglers = document.querySelectorAll("[data-spacing]");

normalversion.addEventListener("click", () => {
  content.classList.remove("content--wga");
});

wgaToggler.addEventListener("click", () => {
  content.classList.add("content--wga");
  content.classList.add("content--wga1");
});

const className = "content--wga";
contrastTogglers[0].addEventListener("click", () => {
  content.classList.add(`${className}1`);
  content.classList.remove(`${className}2`);
  content.classList.remove(`${className}3`);
  content.classList.remove(`${className}4`);
});

contrastTogglers[1].addEventListener("click", () => {
  content.classList.add(`${className}2`);
  content.classList.remove(`${className}1`);
  content.classList.remove(`${className}3`);
  content.classList.remove(`${className}4`);
});

contrastTogglers[2].addEventListener("click", () => {
  content.classList.add(`${className}3`);
  content.classList.remove(`${className}2`);
  content.classList.remove(`${className}1`);
  content.classList.remove(`${className}4`);
});

contrastTogglers[3].addEventListener("click", () => {
  content.classList.add(`${className}4`);
  content.classList.remove(`${className}2`);
  content.classList.remove(`${className}1`);
  content.classList.remove(`${className}3`);
});

fontTogglers[0].addEventListener("click", () => {
  html.style.fontSize = "62.5%";
});

fontTogglers[1].addEventListener("click", () => {
  html.style.fontSize = "70%";
  console.log(fontTogglers);
});

fontTogglers[2].addEventListener("click", () => {
  html.style.fontSize = "75%";
});

const allElements = document.getElementsByTagName("*");

spacingTogglers[0].addEventListener("click", () => {
  if (spacingTogglers[0].classList.contains("toggled")) {
    spacingTogglers[0].classList.remove("toggled");
    content.classList.remove("stretched-vertical");
  } else {
    spacingTogglers[0].classList.add("toggled");
    content.classList.add("stretched-vertical");
  }
});

spacingTogglers[1].addEventListener("click", () => {
  if (spacingTogglers[1].classList.contains("toggled")) {
    spacingTogglers[1].classList.remove("toggled");
    content.classList.remove("stretched-horizontal");
  } else {
    spacingTogglers[1].classList.add("toggled");
    content.classList.add("stretched-horizontal");
  }
});
