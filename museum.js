const caseCopy = {
  problem: 'The original website didn’t clearly communicate that GNM is a network of distinct museums. Essential visitor information, such as opening hours and ticket purchasing, was difficult to find and often required visiting external websites',
  solution: 'The redesign presents GNM as one connected museum network, gives every institution its own identity, and makes practical information and ticket access clear from the first screen.'
};

document.querySelectorAll('[data-case-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelector('[data-case-copy]').textContent = caseCopy[button.dataset.caseTab];
  });
});

const screenNames = ['#1 Home', '#2 Museums', '#3 Collection', '#4 Visit'];
let screenIndex = 0;
const updateScreen = () => {
  document.querySelector('[data-screen-name]').textContent = screenNames[screenIndex];
  document.querySelector('[data-screen-count]').textContent = `${screenIndex + 1} of ${screenNames.length}`;
};
document.querySelector('[data-screen-prev]')?.addEventListener('click', () => { screenIndex = (screenIndex - 1 + screenNames.length) % screenNames.length; updateScreen(); });
document.querySelector('[data-screen-next]')?.addEventListener('click', () => { screenIndex = (screenIndex + 1) % screenNames.length; updateScreen(); });

let processIndex = 0;
const processSteps = ['References', 'Structure', 'UI Design'];
const updateProcess = () => { document.querySelector('[data-process-count]').textContent = `${processIndex + 1}/3 ${processSteps[processIndex]}`; };
document.querySelector('[data-process-prev]')?.addEventListener('click', () => { processIndex = (processIndex + 2) % 3; updateProcess(); });
document.querySelector('[data-process-next]')?.addEventListener('click', () => { processIndex = (processIndex + 1) % 3; updateProcess(); });

document.querySelectorAll('[data-screen-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-screen-mode]').forEach((item) => item.classList.toggle('active', item === button));
  });
});
