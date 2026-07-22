const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

menuButton?.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

sidebar?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    sidebar.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('[data-more-projects]')?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});
