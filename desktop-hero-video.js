(() => {
  const video = document.querySelector('video[data-desktop-video]');
  const source = video?.querySelector('source[data-desktop-src]');
  if (!video || !source) return;

  const desktop = window.matchMedia('(min-width: 761px)');
  const syncVideo = () => {
    if (desktop.matches) {
      if (!source.hasAttribute('src')) {
        source.src = source.dataset.desktopSrc;
        video.load();
      }
      video.play().catch(() => { /* Some browsers require a user gesture. */ });
    } else if (source.hasAttribute('src')) {
      video.pause();
      source.removeAttribute('src');
      video.load();
    }
  };

  desktop.addEventListener('change', syncVideo);
  syncVideo();
})();
