const languageButton = document.querySelector('.language-switch');
const identity = document.querySelector('.identity');
const introStorageKey = 'dina-portfolio-intro-seen';
const languageStorageKey = 'dina-portfolio-language';
const scrollRestoreKey = 'dina-portfolio-language-scroll';
const mobileIntroLayout = window.matchMedia('(max-width: 760px)');
const enteredFromOutside = () => {
  if (performance.getEntriesByType('navigation')[0]?.type !== 'navigate') return false;
  if (!document.referrer) return true;
  try { return new URL(document.referrer).origin !== location.origin; } catch { return true; }
};

const hasSeenIntro = () => {
  try { return sessionStorage.getItem(introStorageKey) === 'true'; } catch { return false; }
};

const rememberIntro = () => {
  try { sessionStorage.setItem(introStorageKey, 'true'); } catch { /* Storage may be unavailable in private contexts. */ }
};

const finishIntro = (skipAnimation = false) => {
  document.body.classList.remove('intro-running');
  document.body.classList.add(skipAnimation ? 'intro-skipped' : 'intro-complete');
  rememberIntro();
};

if (document.body.classList.contains('intro-running')) {
  let languageReload = false;
  try {
    languageReload = JSON.parse(sessionStorage.getItem(scrollRestoreKey) || 'null')?.path === location.pathname;
  } catch { /* A malformed saved position should not stop the intro. */ }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finishIntro(true);
  } else if (languageReload || (hasSeenIntro() && (!mobileIntroLayout.matches || !enteredFromOutside()))) {
    finishIntro();
  } else {
    identity?.addEventListener('animationend', (event) => {
      if (event.target === identity && event.animationName === 'identityIntro') finishIntro();
    });
  }
}

identity?.addEventListener('click', rememberIntro);

const renderLanguageButton = () => {
  if (!languageButton) return;
  const isRussian = document.documentElement.lang === 'ru';
  languageButton.innerHTML = isRussian ? '<span>ENG / </span><strong>RU</strong>' : '<strong>ENG</strong><span> / RU</span>';
  languageButton.setAttribute('aria-label', isRussian ? 'Переключить язык сайта' : 'Switch site language');
};

renderLanguageButton();

languageButton?.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'ru' ? 'en' : 'ru';
  try {
    sessionStorage.setItem(languageStorageKey, nextLanguage);
    sessionStorage.setItem(scrollRestoreKey, JSON.stringify({ path: location.pathname, y: window.scrollY }));
  } catch { /* The current page can still switch languages. */ }
  location.reload();
});

window.addEventListener('load', () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(scrollRestoreKey) || 'null');
    if (saved?.path !== location.pathname) return;
    sessionStorage.removeItem(scrollRestoreKey);
    requestAnimationFrame(() => window.scrollTo(0, saved.y));
  } catch { /* Keep the browser's normal scroll position. */ }
});
