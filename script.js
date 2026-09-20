const header = document.querySelector('[data-header]');
const heroVideo = document.querySelector('[data-hero-video]');
const WHATSAPP_NUMBER = '573168329297';
const WHATSAPP_MESSAGE = 'Hola, estoy interesado en conocer más sobre LÍNEA NATURAL.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll('[data-whatsapp-cta]').forEach((cta) => {
  if (WHATSAPP_URL) cta.href = WHATSAPP_URL;
  else cta.addEventListener('click', (event) => event.preventDefault());
});

const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > window.innerHeight * 0.72);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

heroVideo?.addEventListener('error', () => heroVideo.classList.add('has-error'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const natuSection = document.querySelector('.natu');
const natuVisual = document.querySelector('[data-natu-visual]');
const natuReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (natuSection) {
  const natuObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        natuSection.classList.add('is-visible');
        natuObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  natuObserver.observe(natuSection);
}

if (natuVisual && !natuReducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame = 0;
  const renderNatu = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    natuVisual.style.setProperty('--natu-x', `${currentX.toFixed(2)}px`);
    natuVisual.style.setProperty('--natu-y', `${currentY.toFixed(2)}px`);
    if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) frame = requestAnimationFrame(renderNatu);
    else frame = 0;
  };
  natuVisual.addEventListener('pointermove', (event) => {
    const bounds = natuVisual.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
    if (!frame) frame = requestAnimationFrame(renderNatu);
  });
  natuVisual.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!frame) frame = requestAnimationFrame(renderNatu);
  });
}

const centellaStates = [
  { state: 'LA PLANTA', text: 'Todo comienza con la planta.', image: 'assets/ingredients/centella/01-la-planta.png', alt: 'La planta de centella asiática' },
  { state: 'EL DETALLE', text: 'Acércate.', image: 'assets/ingredients/centella/02-el-detalle.png', alt: 'Detalle de la centella asiática' },
  { state: 'EL EXTRACTO', text: 'De la planta a la fórmula.', image: 'assets/ingredients/centella/03-el-extracto.png', alt: 'El extracto de centella asiática' },
  { state: 'LA CIENCIA', text: 'La naturaleza también tiene una historia que contar.', image: 'assets/ingredients/centella/04-la-ciencia.png', alt: 'La ciencia detrás de la centella asiática' },
  { state: 'EN TU FÓRMULA', text: 'De la naturaleza a tu rutina.', image: 'assets/ingredients/centella/05-en-tu-formula.png', alt: 'Centella asiática en la fórmula' }
];

const centellaImage = document.querySelector('[data-centella-image]');
const centellaCurrent = document.querySelector('[data-centella-current]');
const centellaState = document.querySelector('[data-centella-state]');
const centellaText = document.querySelector('[data-centella-text]');
const centellaDots = [...document.querySelectorAll('[data-centella-dot]')];
let activeCentella = 0;

function setCentellaState(index) {
  const nextIndex = Math.max(0, Math.min(index, centellaStates.length - 1));
  if (nextIndex === activeCentella && centellaImage?.src.endsWith(centellaStates[nextIndex].image)) return;
  activeCentella = nextIndex;
  const current = centellaStates[activeCentella];
  if (centellaImage) {
    centellaImage.style.opacity = '0';
    window.setTimeout(() => {
      centellaImage.src = current.image;
      centellaImage.alt = current.alt;
      centellaImage.style.opacity = '1';
    }, 180);
  }
  if (centellaCurrent) centellaCurrent.textContent = String(activeCentella + 1).padStart(2, '0');
  if (centellaState) centellaState.textContent = current.state;
  if (centellaText) centellaText.textContent = current.text;
  centellaDots.forEach((dot, index) => dot.setAttribute('aria-selected', String(index === activeCentella)));
}

document.querySelector('[data-centella-prev]')?.addEventListener('click', () => setCentellaState(activeCentella - 1));
document.querySelector('[data-centella-next]')?.addEventListener('click', () => setCentellaState(activeCentella + 1));
centellaDots.forEach((dot) => dot.addEventListener('click', () => setCentellaState(Number(dot.dataset.centellaDot))));

const centellaSection = document.querySelector('.centella');
const mediaQuery = window.matchMedia('(min-width: 901px)');
const updateCentellaFromScroll = () => {
  if (!centellaSection || !mediaQuery.matches) return;
  const rect = centellaSection.getBoundingClientRect();
  const progress = Math.max(0, Math.min(0.999, -rect.top / Math.max(1, centellaSection.offsetHeight - window.innerHeight)));
  setCentellaState(Math.floor(progress * centellaStates.length));
};
window.addEventListener('scroll', updateCentellaFromScroll, { passive: true });
window.addEventListener('resize', updateCentellaFromScroll);

const routineSection = document.querySelector('.routine');
const routineScenes = [...document.querySelectorAll('[data-routine-state]')];
const routineIndicators = [...document.querySelectorAll('[data-routine-indicator]')];
let activeRoutine = 0;

function setRoutineState(index) {
  const nextIndex = Math.max(0, Math.min(index, routineScenes.length - 1));
  activeRoutine = nextIndex;
  routineScenes.forEach((scene, sceneIndex) => scene.classList.toggle('is-active', sceneIndex === activeRoutine));
  routineIndicators.forEach((indicator, indicatorIndex) => {
    if (indicatorIndex === activeRoutine) indicator.setAttribute('aria-current', 'step');
    else indicator.removeAttribute('aria-current');
  });
}

const updateRoutineFromScroll = () => {
  if (!routineSection || !mediaQuery.matches || routineScenes.length < 1) return;
  const rect = routineSection.getBoundingClientRect();
  const progress = Math.max(0, Math.min(0.999, -rect.top / Math.max(1, routineSection.offsetHeight - window.innerHeight)));
  setRoutineState(Math.floor(progress * routineScenes.length));
};
window.addEventListener('scroll', updateRoutineFromScroll, { passive: true });
window.addEventListener('resize', updateRoutineFromScroll);
updateRoutineFromScroll();

document.querySelectorAll('[data-ingredient]').forEach((button) => {
  button.addEventListener('click', () => {
    const isCentella = button.dataset.ingredient === 'centella';
    document.querySelectorAll('[data-ingredient]').forEach((item) => item.classList.toggle('ingredient-button--active', item === button));
    const placeholder = document.querySelector('[data-placeholder]');
    if (placeholder) placeholder.hidden = isCentella;
    if (isCentella) {
      document.querySelector('#centella')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
