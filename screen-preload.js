// Give the screen about to enter view a head start on narrow layouts.
(() => {
  const section = document.querySelector('.screens-section');
  if (!section) return;

  const narrowLayout = window.matchMedia('(max-width: 760px)');
  const phoneLayout = window.matchMedia('(max-width: 480px)');
  const warmedUrls = new Map();
  let nearScreens = false;

  if (narrowLayout.matches) {
    section.querySelectorAll('.mobile-screen-viewport img, .screen-bezel img, .desktop-screen-card img').forEach((image) => {
      image.fetchPriority = 'low';
    });
    document.querySelectorAll('.showcase-grid img, .process-image img').forEach((image) => {
      image.fetchPriority = 'low';
    });
  }

  const urlFor = (image) => {
    const source = image.closest('picture')?.querySelector('source');
    return phoneLayout.matches && source ? source.srcset : image.src;
  };

  const warmUrl = (url, priority) => {
    if (!url || warmedUrls.has(url)) return;
    const image = new Image();
    image.fetchPriority = priority;
    image.decoding = 'async';
    image.src = url;
    warmedUrls.set(url, image);
  };

  const screenImages = () => {
    if (section.classList.contains('show-desktop')) {
      return [...section.querySelectorAll('.desktop-screens-stage .desktop-screen-card img')];
    }
    if (section.querySelector('.artlife-desktop-screens')) {
      return [...section.querySelectorAll('.artlife-screen-card img')];
    }
    return [...section.querySelectorAll('.screens-track .screens-page img')];
  };

  const currentIndex = (images) => {
    const mobileCurrent = images.findIndex((image) => image.closest('.is-mobile-current'));
    if (mobileCurrent !== -1) return mobileCurrent;

    const activeImages = images.filter((image) => image.closest('.active'));
    if (!activeImages.length) return 0;
    const track = section.querySelector('.screens-track');
    if (!track || activeImages.length === 1) return images.indexOf(activeImages[0]);
    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const closest = activeImages.reduce((winner, image) => {
      const center = image.getBoundingClientRect().left + image.clientWidth / 2;
      const winnerCenter = winner.getBoundingClientRect().left + winner.clientWidth / 2;
      return Math.abs(center - trackCenter) < Math.abs(winnerCenter - trackCenter) ? image : winner;
    });
    return images.indexOf(closest);
  };

  const warmCurrentAndNext = () => {
    if (!nearScreens || !narrowLayout.matches) return;
    if (window.getAllianceScreenPreloadUrls) {
      const [current, next] = window.getAllianceScreenPreloadUrls();
      const currentImage = section.querySelector('[data-alliance-screen-left] img');
      if (currentImage) {
        currentImage.loading = 'eager';
        currentImage.fetchPriority = 'high';
      }
      warmUrl(current, 'high');
      warmUrl(next, 'low');
      return;
    }

    const images = screenImages();
    if (!images.length) return;
    const index = currentIndex(images);
    const current = images[index];
    const next = images[(index + 1) % images.length];
    current.loading = 'eager';
    current.fetchPriority = 'high';
    next.loading = 'eager';
    next.fetchPriority = 'low';
    warmUrl(urlFor(current), 'high');
    warmUrl(urlFor(next), 'low');
  };

  const observer = new IntersectionObserver(([entry]) => {
    nearScreens = entry.isIntersecting;
    if (nearScreens) warmCurrentAndNext();
  }, { rootMargin: '1400px 0px 1400px 0px' });
  observer.observe(section);

  section.addEventListener('screens:changed', warmCurrentAndNext);
  section.querySelectorAll('[data-screen-prev], [data-screen-next], [data-screen-mode]').forEach((button) => {
    button.addEventListener('click', () => requestAnimationFrame(warmCurrentAndNext));
  });
  section.querySelector('.screens-track')?.addEventListener('scroll', () => requestAnimationFrame(warmCurrentAndNext), { passive: true });
  narrowLayout.addEventListener('change', warmCurrentAndNext);
})();
