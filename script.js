const themeButton = document.querySelector('.theme-switch');
const identity = document.querySelector('.identity');
const introStorageKey = 'dina-portfolio-intro-seen';
const themeStorageKey = 'dina-portfolio-theme';

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

if (document.body.classList.contains('intro-running') && hasSeenIntro()) {
  finishIntro(true);
} else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  finishIntro(true);
} else {
  identity?.addEventListener('animationend', (event) => {
    if (event.target === identity && event.animationName === 'identityIntro') finishIntro();
  });
}

identity?.addEventListener('click', rememberIntro);

const renderThemeButton = () => {
  const isDark = document.documentElement.classList.contains('dark-theme');
  themeButton.innerHTML = isDark ? '<span>Light / </span><strong>Dark</strong>' : '<strong>Light</strong><span> / Dark</span>';
};

if (themeButton) renderThemeButton();

themeButton?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark-theme');
  try { localStorage.setItem(themeStorageKey, isDark ? 'dark' : 'light'); } catch { /* Keep the theme for the current page. */ }
  renderThemeButton();
});
