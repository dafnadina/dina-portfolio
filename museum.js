const caseCopy = {
  problem: 'The original website didn’t clearly communicate that GNM is a network of distinct museums. Essential visitor information, such as opening hours and ticket purchasing, was difficult to find and often required visiting external websites',
  solution: 'The redesign presents GNM as one connected museum network, gives every institution its own identity, and makes practical information and ticket access clear from the first screen.'
};

document.querySelectorAll('[data-case-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelector('[data-case-copy]').textContent = siteLanguage.t(caseCopy[button.dataset.caseTab]);
  });
});

const screenPages = {
  mobile: [...document.querySelectorAll('[data-screens-page]')],
  desktop: [...document.querySelectorAll('[data-desktop-page]')]
};
const screenPageIndex = { mobile: 0, desktop: 0 };
const mobileScreenLayout = window.matchMedia('(max-width: 760px)');
const mobileScreenCards = [...document.querySelectorAll('[data-mobile-screens] .mobile-screen-card')];
const mobileScreensPerPage = screenPages.mobile[0]?.querySelectorAll('.mobile-screen-card').length || 1;
const desktopScreenCards = [...document.querySelectorAll('[data-desktop-page] .desktop-screen-card')];
let mobileScreenIndex = 0;
let mobileDesktopIndex = 0;
let screenMode = 'mobile';

document.querySelectorAll('.mobile-screen-viewport').forEach((viewport) => {
  viewport.tabIndex = 0;
  viewport.setAttribute('aria-label', siteLanguage.isRussian ? `Прокрутить экран: ${viewport.querySelector('img').alt}` : `Scroll the ${viewport.querySelector('img').alt}`);
});

const updateScreensPage = () => {
  mobileScreenCards.forEach((card, index) => card.classList.toggle('is-mobile-current', index === mobileScreenIndex));
  desktopScreenCards.forEach((card, index) => card.classList.toggle('is-mobile-current', index === mobileDesktopIndex));
  Object.entries(screenPages).forEach(([mode, pages]) => {
    pages.forEach((page, index) => {
      const activeIndex = mobileScreenLayout.matches && mode === 'mobile'
        ? Math.floor(mobileScreenIndex / mobileScreensPerPage)
        : mobileScreenLayout.matches && mode === 'desktop'
          ? Math.floor(mobileDesktopIndex / 2)
          : screenPageIndex[mode];
      const isActive = index === activeIndex;
      page.classList.toggle('active', isActive);
      page.hidden = !isActive;
      if (isActive && mode === screenMode) page.querySelectorAll('.mobile-screen-viewport, .desktop-screen-card > div').forEach((viewport) => { viewport.scrollTop = 0; });
    });
  });
};

const changeScreensPage = (direction) => {
  if (screenMode === 'mobile' && mobileScreenLayout.matches) {
    mobileScreenIndex = (mobileScreenIndex + direction + mobileScreenCards.length) % mobileScreenCards.length;
    screenPageIndex.mobile = Math.floor(mobileScreenIndex / mobileScreensPerPage);
    updateScreensPage();
    return;
  }
  if (screenMode === 'desktop' && mobileScreenLayout.matches) {
    mobileDesktopIndex = (mobileDesktopIndex + direction + desktopScreenCards.length) % desktopScreenCards.length;
    screenPageIndex.desktop = Math.floor(mobileDesktopIndex / 2);
    updateScreensPage();
    return;
  }
  const pages = screenPages[screenMode];
  screenPageIndex[screenMode] = (screenPageIndex[screenMode] + direction + pages.length) % pages.length;
  if (screenMode === 'mobile') mobileScreenIndex = screenPageIndex.mobile * mobileScreensPerPage;
  if (screenMode === 'desktop') mobileDesktopIndex = screenPageIndex.desktop * 2;
  updateScreensPage();
};
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => changeScreensPage(-1));
document.querySelector('[data-screen-next]')?.addEventListener('click', () => changeScreensPage(1));

let processIndex = 0;
const processSteps = [
  {
    name: 'References',
    copy: 'I explored museum websites, collecting and organising visual references to inform the layout, typography and interaction patterns of the new interface. This helped me explore different design approaches and establish a visual direction for the project',
    image: 'assets/museum/process.webp',
    alt: 'A collection of museum website references'
  },
  {
    name: 'Redlines',
    copy: 'Alongside desktop and mobile layouts, a redline version was created for every screen to document the grid, spacing, dimensions and alignment for development',
    image: 'assets/museum/process-interactive-prototype-v2.webp',
    alt: 'Redline versions of the Georgian National Museum desktop screens',
    contain: true
  },
  {
    name: 'Interactive Prototype',
    copy: 'An interactive prototype was created to test navigation, user flows and the connections between desktop and mobile screens before the final handoff',
    image: 'assets/museum/process-interactive-prototype.webp',
    alt: 'Interactive prototype connections between Georgian National Museum screens',
    contain: true
  }
];
const updateProcess = () => {
  const step = processSteps[processIndex];
  const image = document.querySelector('[data-process-image]');
  document.querySelector('[data-process-count]').textContent = `${processIndex + 1}/3 ${siteLanguage.t(step.name)}`;
  document.querySelector('[data-process-copy]').textContent = siteLanguage.t(step.copy);
  image.src = step.image;
  image.alt = siteLanguage.t(step.alt);
  image.classList.toggle('is-contain', Boolean(step.contain));
};
document.querySelector('[data-process-prev]')?.addEventListener('click', () => { processIndex = (processIndex + 2) % 3; updateProcess(); });
document.querySelector('[data-process-next]')?.addEventListener('click', () => { processIndex = (processIndex + 1) % 3; updateProcess(); });

document.querySelectorAll('[data-screen-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-screen-mode]').forEach((item) => item.classList.toggle('active', item === button));
    screenMode = button.dataset.screenMode;
    document.querySelector('.screens-section').classList.toggle('show-desktop', screenMode === 'desktop');
    updateScreensPage();
  });
});

mobileScreenLayout.addEventListener('change', ({ matches }) => {
  if (matches) {
    mobileDesktopIndex = screenPageIndex.desktop * 2;
  } else {
    screenPageIndex.mobile = Math.floor(mobileScreenIndex / mobileScreensPerPage);
    screenPageIndex.desktop = Math.floor(mobileDesktopIndex / 2);
  }
  updateScreensPage();
});
updateScreensPage();
