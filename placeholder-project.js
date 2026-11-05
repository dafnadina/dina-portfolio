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
if (!document.querySelector('[data-process-image]')) {
  document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
    placeholderProcessIndex = (placeholderProcessIndex + 2) % 3;
    renderPlaceholderProcess();
  });
  document.querySelector('[data-process-next]')?.addEventListener('click', () => {
    placeholderProcessIndex = (placeholderProcessIndex + 1) % 3;
    renderPlaceholderProcess();
  });
}

const placeholderScreensTrack = document.querySelector('.screens-track');
const placeholderScreenPages = [...document.querySelectorAll('[data-screens-page]')];
let placeholderScreenPageIndex = 0;
const artlifeScreenCards = [...document.querySelectorAll('.artlife-desktop-screens .artlife-screen-card')];
const mobileProjectLayout = window.matchMedia('(max-width: 760px)');
let artlifeMobileScreenIndex = 0;
const renderPlaceholderScreenPage = () => {
  artlifeScreenCards.forEach((card, index) => card.classList.toggle('is-mobile-current', index === artlifeMobileScreenIndex));
  placeholderScreenPages.forEach((page, index) => {
    const activeIndex = artlifeScreenCards.length && mobileProjectLayout.matches
      ? Math.floor(artlifeMobileScreenIndex / 2) : placeholderScreenPageIndex;
    const isActive = index === activeIndex;
    page.classList.toggle('active', isActive);
    page.hidden = !isActive;
    if (isActive) page.querySelectorAll('.screen-bezel, .artlife-screen-card > div').forEach((viewport) => { viewport.scrollTop = 0; });
  });
};
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => {
  if (placeholderScreenPages.length) {
    if (artlifeScreenCards.length && mobileProjectLayout.matches) {
      artlifeMobileScreenIndex = (artlifeMobileScreenIndex - 1 + artlifeScreenCards.length) % artlifeScreenCards.length;
      placeholderScreenPageIndex = Math.floor(artlifeMobileScreenIndex / 2);
    } else {
      placeholderScreenPageIndex = (placeholderScreenPageIndex - 1 + placeholderScreenPages.length) % placeholderScreenPages.length;
      if (artlifeScreenCards.length) artlifeMobileScreenIndex = placeholderScreenPageIndex * 2;
    }
    renderPlaceholderScreenPage();
  } else {
    placeholderScreensTrack?.prepend(placeholderScreensTrack.lastElementChild);
  }
});
document.querySelector('[data-screen-next]')?.addEventListener('click', () => {
  if (placeholderScreenPages.length) {
    if (artlifeScreenCards.length && mobileProjectLayout.matches) {
      artlifeMobileScreenIndex = (artlifeMobileScreenIndex + 1) % artlifeScreenCards.length;
      placeholderScreenPageIndex = Math.floor(artlifeMobileScreenIndex / 2);
    } else {
      placeholderScreenPageIndex = (placeholderScreenPageIndex + 1) % placeholderScreenPages.length;
      if (artlifeScreenCards.length) artlifeMobileScreenIndex = placeholderScreenPageIndex * 2;
    }
    renderPlaceholderScreenPage();
  } else {
    placeholderScreensTrack?.append(placeholderScreensTrack.firstElementChild);
  }
});
if (artlifeScreenCards.length) {
  mobileProjectLayout.addEventListener('change', ({ matches }) => {
    if (matches) artlifeMobileScreenIndex = placeholderScreenPageIndex * 2;
    else placeholderScreenPageIndex = Math.floor(artlifeMobileScreenIndex / 2);
    renderPlaceholderScreenPage();
  });
}
renderPlaceholderScreenPage();
