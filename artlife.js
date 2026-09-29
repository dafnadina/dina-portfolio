const artlifeProcessSteps = [
  {
    name: 'Responsive Design',
    copy: 'I designed the core experience across desktop, tablet and mobile, adapting content hierarchy and navigation while keeping the architectural character of the interface consistent at every breakpoint.',
    image: 'assets/artlife/process-responsive.png',
    alt: 'Artlife responsive layouts and calculator screens'
  },
  {
    name: 'UI Kit',
    copy: 'I built a reusable UI kit for navigation, project cards, service blocks, controls, contact details and calculator elements. A restrained neutral palette and modular components keep the interface precise and consistent.',
    image: 'assets/artlife/process-ui-kit.png',
    alt: 'Artlife UI kit with reusable interface components'
  },
  {
    name: 'Final Interface',
    copy: 'The final interface combines a portfolio-led homepage, service presentation, a catalogue of standard projects and a guided calculator that supports both standard and individual project enquiries.',
    image: 'assets/artlife/hero-desktop.jpeg',
    alt: 'Final Artlife desktop homepage interface'
  }
];

let artlifeProcessIndex = 0;

const renderArtlifeProcess = () => {
  const step = artlifeProcessSteps[artlifeProcessIndex];
  const image = document.querySelector('[data-process-image]');
  document.querySelector('[data-process-count]').textContent = `${artlifeProcessIndex + 1}/${artlifeProcessSteps.length} ${step.name}`;
  document.querySelector('[data-process-copy]').textContent = step.copy;
  image.src = step.image;
  image.alt = step.alt;
};

document.querySelector('[data-process-prev]')?.addEventListener('click', () => {
  artlifeProcessIndex = (artlifeProcessIndex - 1 + artlifeProcessSteps.length) % artlifeProcessSteps.length;
  renderArtlifeProcess();
});

document.querySelector('[data-process-next]')?.addEventListener('click', () => {
  artlifeProcessIndex = (artlifeProcessIndex + 1) % artlifeProcessSteps.length;
  renderArtlifeProcess();
});
