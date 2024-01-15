const bodyEl = document.querySelector('.page');
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY;
  const headerHeight = headerEl.scrollHeight;

  if (windowPosition > headerHeight) {
    headerEl.classList.add('active');
  } else {
    headerEl.classList.remove('active');
  }
});
