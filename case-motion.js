(() => {
  const shell = document.querySelector('.case-shell');
  if (!shell || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const headings = [...shell.querySelectorAll(':scope > h1, .process-section > h2, .screens-heading > h2')];
  const blocks = [...shell.querySelectorAll([
    '.hero-small', '.hero-large', '.project-links', '.case-intro',
    '.showcase-grid > *', '.case-tabs', '.problem-section > p',
    '.process-carousel', '.process-section > h3', '.process-section > p',
    '.device-tabs', '.screens-carousel', '.screens-scroll-hint'
  ].join(', '))];

  headings.forEach((heading) => {
    const plainHeading = heading.cloneNode(true);
    plainHeading.querySelector('.case-title-meta')?.remove();
    plainHeading.querySelectorAll('br').forEach((breakNode) => breakNode.replaceWith(' '));
    const title = plainHeading.textContent.replace(/\s+/g, ' ').trim();
    const meta = [...heading.querySelectorAll('.case-title-meta span')].map((label) => label.textContent.trim());
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => node.parentElement.closest('.case-title-meta')
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const textNodes = [];
    let charIndex = 0;
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((textNode) => {
      const fragment = document.createDocumentFragment();
      for (const part of textNode.textContent.match(/\S+|\s+/g) || []) {
        if (/^\s+$/.test(part)) {
          fragment.append(part);
          charIndex += part.length;
          continue;
        }

        const word = document.createElement('span');
        word.className = 'case-type-word';
        word.setAttribute('aria-hidden', 'true');
        for (const character of part) {
          const letter = document.createElement('span');
          letter.className = 'case-type-char';
          letter.style.setProperty('--char-index', charIndex);
          letter.textContent = character;
          word.append(letter);
          charIndex += 1;
        }
        fragment.append(word);
      }
      textNode.replaceWith(fragment);
    });

    heading.setAttribute('aria-label', [title, ...meta].join(', '));
    heading.style.setProperty('--heading-chars', charIndex);
    heading.classList.add('case-type-heading');
  });

  blocks.forEach((block) => block.classList.add('case-reveal'));
  document.documentElement.classList.add('case-motion-ready');

  const targets = [...headings, ...blocks].sort((a, b) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  );
  let nextRevealAt = performance.now();
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => targets.indexOf(a.target) - targets.indexOf(b.target));

    visible.forEach((entry) => {
      observer.unobserve(entry.target);
      const now = performance.now();
      const delay = Math.max(0, nextRevealAt - now);
      window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
      nextRevealAt = now + delay + (entry.target.matches('h1') ? 280 : 150);
    });
  }, { rootMargin: '0px 0px -4% 0px', threshold: .05 });

  targets.forEach((target) => observer.observe(target));
})();
