window.addEventListener('load', (event) => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.classList.add('loader-wrapper--faded');
  setTimeout(() => {
    document.querySelector('.content').classList.remove('content--hide');
  }, 500);
});
