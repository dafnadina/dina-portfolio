(() => {
  let language = 'en';
  try {
    if (sessionStorage.getItem('dina-portfolio-language') === 'ru') language = 'ru';
  } catch { /* Keep English when session storage is unavailable. */ }
  document.documentElement.lang = language;
  document.documentElement.classList.toggle('lang-ru', language === 'ru');
})();
