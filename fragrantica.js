const fragranticaProcessSteps = [
  {
    name: 'Current Experience',
    copy: 'I reviewed conversations on Reddit, iRecommend and the Fragrantica forum to understand how people use the current platform. The feedback confirmed demand for a mobile app and highlighted an overloaded interface, weak mobile adaptation and friction in everyday fragrance discovery.',
    image: 'assets/fragrantica/process-current-interface.png',
    alt: 'User comments about the existing Fragrantica mobile experience'
  },
  {
    name: 'Competitor Analysis',
    copy: 'I studied fragrance, beauty and retail apps with similar user journeys, comparing their strengths, weaknesses and mobile interaction patterns. This helped identify useful conventions and opportunities for features that were not represented in the existing Fragrantica experience.',
    image: 'assets/fragrantica/process-competitor-analysis.png',
    alt: 'Competitor analysis of fragrance, beauty and retail mobile apps'
  },
  {
    name: 'Usability Testing',
    copy: 'I tested the existing interface with five respondents across four scenarios: basic search, search by notes, finding reviews and discovering similar fragrances. Basic tasks were completed successfully, while advanced features proved difficult to find and understand, revealing clear priorities for the redesign.',
    image: 'assets/fragrantica/process-usability-results.png',
    alt: 'Usability testing results for four tasks in the existing Fragrantica interface'
  },
  {
    name: 'Low-fidelity Prototype',
    copy: 'I created low-fidelity prototypes to define the structure of the key screens and work through the main user flows before moving into visual design. This made it possible to explore search, filtering and fragrance details quickly while keeping the focus on hierarchy and usability.',
    image: 'assets/fragrantica/process-low-fidelity.png',
    alt: 'Low-fidelity mobile prototypes for the Fragrantica app'
  },
  {
    name: 'Interactive Prototype',
    copy: 'I connected the final screens into an interactive prototype to test navigation and complete product scenarios. The prototype covers the journey from onboarding and discovery to search, filtering, fragrance details and evaluation.',
    image: 'assets/fragrantica/process-interactive-prototype.png',
    alt: 'Interactive Fragrantica prototype showing connected mobile screens and user flows'
  }
];

let fragranticaProcessIndex = 0;

const renderFragranticaProcess = () => {
  const step = fragranticaProcessSteps[fragranticaProcessIndex];
  const image = document.querySelector('[data-process-image]');
  document.querySelector('[data-process-count]').textContent = `${fragranticaProcessIndex + 1}/${fragranticaProcessSteps.length} ${step.name}`;
  document.querySelector('[data-process-copy]').textContent = step.copy;
  image.src = step.image;
  image.alt = step.alt;
};

document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
  fragranticaProcessIndex = (fragranticaProcessIndex - 1 + fragranticaProcessSteps.length) % fragranticaProcessSteps.length;
  renderFragranticaProcess();
});

document.querySelector('[data-process-next]')?.addEventListener('click', () => {
  fragranticaProcessIndex = (fragranticaProcessIndex + 1) % fragranticaProcessSteps.length;
  renderFragranticaProcess();
});
