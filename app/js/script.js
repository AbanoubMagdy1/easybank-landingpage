const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobomenu = document.querySelector('#mobomenu');

hamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    document.body.classList.remove('noscroll');
    header.classList.remove('open');
    overlay.className = 'overlay fade-out';
    mobomenu.classList.remove('go-in');
    mobomenu.classList.add('go-out');
  } else {
    document.body.classList.add('noscroll');
    header.classList.add('open');
    overlay.className = 'overlay fade-in';
    mobomenu.classList.add('go-in');
    mobomenu.classList.remove('go-out');
  }
});
