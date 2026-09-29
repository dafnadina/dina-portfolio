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
    name: 'Personas',
    copy: 'I translated the research into three personas with different levels of fragrance knowledge and distinct shopping habits. Their goals and pain points shaped scenarios for faster search, clearer product information, relevant alternatives and guided fragrance discovery.',
    image: 'assets/fragrantica/process-personas.png',
    alt: 'Three Fragrantica user personas with their habits, goals and pain points'
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
