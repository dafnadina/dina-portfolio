(() => {
  // Keep short prepositions, conjunctions, and articles with the next word.
  const words = document.documentElement.lang === 'ru'
    ? ['в', 'во', 'на', 'с', 'со', 'к', 'ко', 'у', 'о', 'об', 'обо', 'по', 'от', 'до', 'за', 'из', 'без', 'для', 'при', 'под', 'над', 'перед', 'между', 'через', 'после', 'и', 'а', 'но']
    : ['in', 'on', 'at', 'to', 'of', 'for', 'by', 'with', 'from', 'as', 'into', 'about', 'over', 'under', 'between', 'through', 'after', 'before', 'without', 'within', 'and', 'or', 'the', 'a', 'an'];
  const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${words.join('|')})([ \\t]+)(?=[\\p{L}\\p{N}])`, 'giu');

  const keepWithNext = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      let updated = node.nodeValue;
      let previous;
      do {
        previous = updated;
        updated = updated.replace(pattern, (_, before, word) => `${before}${word}\u00a0`);
      } while (updated !== previous);
      if (updated !== node.nodeValue) node.nodeValue = updated;
    }
  };

  const heading = document.querySelector('.case-shell > h1');
  if (heading) keepWithNext(heading);

  const changingCopy = [...document.querySelectorAll([
    '.case-highlights', '.case-intro', '[data-case-copy]',
    '[data-process-count]', '[data-process-copy]', '.screens-scroll-hint',
    '.contact-block h2'
  ].join(', '))];
  changingCopy.forEach(keepWithNext);

  const observer = new MutationObserver(() => changingCopy.forEach(keepWithNext));
  changingCopy.forEach((element) => observer.observe(element, {
    childList: true,
    characterData: true,
    subtree: true
  }));
})();
