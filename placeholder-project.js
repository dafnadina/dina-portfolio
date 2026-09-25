const placeholderText = 'PLACEHOLDER TEXT — REPLACE WITH FINAL PROJECT CONTENT.';

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelectorAll('[data-case-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelector('[data-case-copy]').textContent = placeholderText;
  });
});

let placeholderProcessIndex = 0;
const renderPlaceholderProcess = () => {
  document.querySelector('[data-process-count]').textContent = `${placeholderProcessIndex + 1}/3 Replace Later`;
  document.querySelector('[data-process-copy]').textContent = placeholderText;
};
document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
  placeholderProcessIndex = (placeholderProcessIndex + 2) % 3;
  renderPlaceholderProcess();
});
document.querySelector('[data-process-next]')?.addEventListener('click', () => {
  placeholderProcessIndex = (placeholderProcessIndex + 1) % 3;
  renderPlaceholderProcess();
});

const placeholderScreensTrack = document.querySelector('.screens-track');
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => {
  placeholderScreensTrack?.prepend(placeholderScreensTrack.lastElementChild);
});
document.querySelector('[data-screen-next]')?.addEventListener('click', () => {
  placeholderScreensTrack?.append(placeholderScreensTrack.firstElementChild);
});
