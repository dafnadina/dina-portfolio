const themeButton = document.querySelector('.theme-switch');
const identity = document.querySelector('.identity');
const identityDot = document.querySelector('.identity-dot');

const finishIntro = () => {
  document.body.classList.remove('intro-running');
  document.body.classList.add('intro-complete');
};

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  finishIntro();
} else {
  identity?.addEventListener('animationend', (event) => {
    if (event.target === identity && event.animationName === 'identityIntro') finishIntro();
  });
}

identityDot?.addEventListener('click', (event) => {
  event.preventDefault();
  identityDot.classList.toggle('is-blue');
});

themeButton?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.innerHTML = isDark ? '<span>Light / </span><strong>Dark</strong>' : '<strong>Light</strong><span> / Dark</span>';
});
