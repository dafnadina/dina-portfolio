const allianceCopy = {
  problem: 'Students and early-career researchers have no single place to discover projects, tools, communities and relevant opportunities. Researchers also struggle to connect with technical specialists, while communities remain scattered across different platforms',
  solution: 'A structured discovery platform connects people, projects, jobs and tools through clear navigation and a scalable information architecture. It creates one accessible entry point into the digital humanities community'
};

document.querySelectorAll('[data-case-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelector('[data-case-copy]').textContent = allianceCopy[button.dataset.caseTab];
  });
});

const allianceProcess = [
  {
    name: 'Research',
    copy: 'Surveys, in-depth interviews and UX testing with 46 participants helped uncover user needs, workflows and the barriers people face when looking for digital humanities opportunities',
    image: 'assets/project-dh-1.png'
  },
  {
    name: 'Structure',
    copy: 'The research findings were translated into a clear information architecture connecting projects, opportunities, people and practical resources in one scalable system',
    image: 'assets/project-dh-2.png'
  },
  {
    name: 'UI Design',
    copy: 'More than 15 unique screens were designed around discovery, legibility and consistent navigation across desktop and mobile experiences',
    image: 'assets/project/dh-screen.png'
  }
];
let allianceProcessIndex = 0;
const renderAllianceProcess = () => {
  const step = allianceProcess[allianceProcessIndex];
  document.querySelector('[data-process-count]').textContent = `${allianceProcessIndex + 1}/3 ${step.name}`;
  document.querySelector('[data-process-copy]').textContent = step.copy;
  document.querySelector('[data-process-image]').src = step.image;
};
document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
  allianceProcessIndex = (allianceProcessIndex + allianceProcess.length - 1) % allianceProcess.length;
  renderAllianceProcess();
});
document.querySelector('[data-process-next]')?.addEventListener('click', () => {
  allianceProcessIndex = (allianceProcessIndex + 1) % allianceProcess.length;
  renderAllianceProcess();
});

document.querySelectorAll('[data-screen-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-screen-mode]').forEach((item) => item.classList.toggle('active', item === button));
  });
});

const allianceScreensTrack = document.querySelector('.screens-track');
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => {
  allianceScreensTrack?.prepend(allianceScreensTrack.lastElementChild);
});
document.querySelector('[data-screen-next]')?.addEventListener('click', () => {
  allianceScreensTrack?.append(allianceScreensTrack.firstElementChild);
});
