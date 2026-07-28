const projectKey = new URLSearchParams(window.location.search).get('project') || 'dh-alliance';
const project = window.PROJECTS[projectKey] || window.PROJECTS['dh-alliance'];
let activeTab = 'overview';
let activeScreen = 0;

const field = (name) => document.querySelector(`[data-project="${name}"]`);

function renderProject() {
  document.title = `${project.title} — Dina Radosavlevich`;
  field('title').textContent = project.title;
  field('team').textContent = project.team;
  field('duration').textContent = project.duration;
  field('tools').textContent = project.tools;
  field('summary').textContent = project.summary;
  field('hero').src = project.hero;
  field('hero').alt = `${project.title} cover`;

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
  field('storyImage').src = section.image;
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
