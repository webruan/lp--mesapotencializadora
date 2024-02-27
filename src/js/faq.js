document.addEventListener("DOMContentLoaded", function() {
  let item = document.querySelectorAll('.faq-box');
  let icon = document.querySelectorAll('.faq-icon');

  item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
      item.forEach(a => a.classList.remove('open'));
      item[index].classList !== 'open'
      ? item[index].classList.add('open')
      : item[index].classList.remove('open');
    });
  });

  item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
      icon.forEach(a => a.innerText = '+');
      icon[index].innerText == '+'
      ? icon[index].innerText = '-'
      : icon[index].innerText = '+';
    });
  });
});