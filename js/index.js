// Додавання стилей для фону Header
// під час прокручування сторінки
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

// Form elements
const subscriptionForm = document.querySelector('.modal-form');
const reviewForm = document.querySelector('.review-form');

subscriptionForm.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  console.log('Form name: ', event.target.name);
  console.log('Form field name: ', event.target.elements.user_name.value);
  console.log('Form field email: ', event.target.elements.user_email.value);

  event.target.reset();
}
