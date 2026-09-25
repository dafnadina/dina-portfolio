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
    name: 'Context',
    copy: 'Digital humanities projects, from digital archives and virtual museums to text-based visualizations and interactive historical maps, preserve cultural heritage, yet they are hard to find online',
    image: 'assets/project-dh-process/01-context.png'
  },
  {
    name: 'Problems',
    copy: 'Projects are scattered across sites and channels, rarely described in public and closed within their teams, with no simple way to collaborate or find funding',
    image: 'assets/project-dh-process/02-problems.png'
  },
  {
    name: 'Target Audience',
    copy: 'Three audiences emerged: project authors who want to present their work and find co-authors, people looking for internships, jobs and tools, and users who want to join projects and learn from them',
    image: 'assets/project-dh-process/03-target-audience.png'
  },
  {
    name: 'Competitive Analysis',
    copy: 'Six foreign and Russian-speaking DH organizations were compared: most have no internship or job sections, and Russian-language resources have not been updated in over a year',
    image: 'assets/project-dh-process/04-competitive-analysis.png'
  },
  {
    name: 'Research Insights',
    copy: 'Surveys, in-depth interviews and UX testing with 46 participants helped uncover user needs, workflows and the barriers people face when looking for digital humanities opportunities',
    image: 'assets/project-dh-process/05-research-insights.png'
  },
  {
    name: 'Personas',
    copy: 'The findings were distilled into three personas, a student, a project author and a project participant, each with their own pain points',
    image: 'assets/project-dh-process/06-personas.png'
  },
  {
    name: 'User Stories',
    copy: 'Each persona received their own user stories describing what they need from the platform and why',
    image: 'assets/project-dh-process/07-user-stories.png'
  },
  {
    name: 'Information Architecture',
    copy: 'The research findings were translated into a clear information architecture connecting projects, opportunities, people and practical resources in one scalable system',
    image: 'assets/project-dh-process/08-information-architecture.png'
  }
];
let allianceProcessIndex = 0;
const renderAllianceProcess = () => {
  const step = allianceProcess[allianceProcessIndex];
  const image = document.querySelector('[data-process-image]');
  document.querySelector('[data-process-count]').textContent = `${allianceProcessIndex + 1}/${allianceProcess.length} ${step.name}`;
  document.querySelector('[data-process-copy]').textContent = step.copy;
  image.src = step.image;
  image.alt = `DH Alliance design process: ${step.name.toLowerCase()} slide`;
};
document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
  allianceProcessIndex = (allianceProcessIndex + allianceProcess.length - 1) % allianceProcess.length;
  renderAllianceProcess();
});
document.querySelector('[data-process-next]')?.addEventListener('click', () => {
  allianceProcessIndex = (allianceProcessIndex + 1) % allianceProcess.length;
  renderAllianceProcess();
});
