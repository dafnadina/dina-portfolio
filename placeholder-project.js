const placeholderText = 'PLACEHOLDER TEXT — REPLACE WITH FINAL PROJECT CONTENT.';

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelectorAll('[data-case-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelector('[data-case-copy]').textContent = button.dataset.caseText || placeholderText;
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
const placeholderScreenPages = [...document.querySelectorAll('[data-screens-page]')];
let placeholderScreenPageIndex = 0;
const renderPlaceholderScreenPage = () => {
  placeholderScreenPages.forEach((page, index) => {
    const isActive = index === placeholderScreenPageIndex;
    page.classList.toggle('active', isActive);
    page.hidden = !isActive;
  });
};
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => {
  if (placeholderScreenPages.length) {
    placeholderScreenPageIndex = (placeholderScreenPageIndex - 1 + placeholderScreenPages.length) % placeholderScreenPages.length;
    renderPlaceholderScreenPage();
  } else {
    placeholderScreensTrack?.prepend(placeholderScreensTrack.lastElementChild);
  }
});
document.querySelector('[data-screen-next]')?.addEventListener('click', () => {
  if (placeholderScreenPages.length) {
    placeholderScreenPageIndex = (placeholderScreenPageIndex + 1) % placeholderScreenPages.length;
    renderPlaceholderScreenPage();
  } else {
    placeholderScreensTrack?.append(placeholderScreensTrack.firstElementChild);
  }
});
