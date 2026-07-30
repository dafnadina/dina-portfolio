const projectKey = new URLSearchParams(window.location.search).get('project') || 'dh-alliance';
const project = window.PROJECTS[projectKey] || window.PROJECTS['dh-alliance'];
let activeTab = 'overview';
let activeScreen = 0;

const field = (name) => document.querySelector(`[data-project="${name}"]`);
const mediaObservers = new WeakMap();

function fitVideo(container, iframe, ratio) {
  const { width, height } = container.getBoundingClientRect();
  if (!width || !height) return;
  if (width / height > ratio) {
    iframe.style.width = `${width}px`;
    iframe.style.height = `${width / ratio}px`;
  } else {
    iframe.style.height = `${height}px`;
    iframe.style.width = `${height * ratio}px`;
  }
}

function renderMedia(container, media, label, eager = false) {
  if (media.type === 'video') {
    container.innerHTML = `<iframe src="${media.src}" title="${label}" loading="${eager ? 'eager' : 'lazy'}" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    const iframe = container.querySelector('iframe');
    const ratio = media.ratio || 16 / 9;
    requestAnimationFrame(() => fitVideo(container, iframe, ratio));
    mediaObservers.get(container)?.disconnect();
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(() => fitVideo(container, iframe, ratio));
      observer.observe(container);
      mediaObservers.set(container, observer);
    }
    return;
  }
  container.innerHTML = `<img src="${media.src}" alt="${label}" loading="${eager ? 'eager' : 'lazy'}" />`;
}

function renderProject() {
  document.title = `${project.title} — Dina Radosavlevich`;
  field('title').textContent = project.title;
  field('team').textContent = project.team;
  field('duration').textContent = project.duration;
  field('tools').textContent = project.tools;
  field('summary').textContent = project.summary;
  renderMedia(field('heroMedia'), project.hero, `${project.title} overview video`, true);

  field('links').innerHTML = project.links.map((link) => `
    <a href="${link.url}" target="_blank" rel="noreferrer">
      ${link.label}<img src="assets/project/external-link.svg" alt="" />
    </a>
  `).join('');

  field('metrics').innerHTML = project.metrics.map((metric) => `
    <article class="metric-card">
      <div class="metric-value"><strong>${metric.value}</strong><span>${metric.label}</span></div>
      <p>${metric.text}</p>
    </article>
  `).join('');

  renderStory();
  renderScreen();
}

function renderStory() {
  const section = project.sections[activeTab];
  field('story').textContent = section.text;
  renderMedia(field('storyMedia'), section.media, `${project.title} ${activeTab}`);
  document.querySelectorAll('[data-tab]').forEach((tab) => {
    tab.setAttribute('aria-selected', String(tab.dataset.tab === activeTab));
  });
}

function renderScreen() {
  const screen = project.screens[activeScreen];
  field('screenTitle').textContent = screen.title;
  field('screenText').textContent = screen.text;
  field('screenImage').src = screen.image;
  field('screenCount').textContent = `${activeScreen + 1} of ${project.screens.length}`;
}

document.querySelectorAll('[data-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    activeTab = tab.dataset.tab;
    renderStory();
  });
});

document.querySelector('[data-screen-prev]').addEventListener('click', () => {
  activeScreen = (activeScreen - 1 + project.screens.length) % project.screens.length;
  renderScreen();
});

document.querySelector('[data-screen-next]').addEventListener('click', () => {
  activeScreen = (activeScreen + 1) % project.screens.length;
  renderScreen();
});

renderProject();
