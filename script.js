const themeButton = document.querySelector('.theme-switch');

themeButton?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.innerHTML = isDark ? '<span>Light / </span><strong>Dark</strong>' : '<strong>Light</strong><span> / Dark</span>';
});
