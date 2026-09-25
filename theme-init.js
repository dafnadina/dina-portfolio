(() => {
  try {
    if (localStorage.getItem('dina-portfolio-theme') === 'dark') {
      document.documentElement.classList.add('dark-theme');
    }
  } catch { /* Use the default light theme when storage is unavailable. */ }
})();
