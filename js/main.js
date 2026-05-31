const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $('[data-header]');
const navToggle = $('[data-nav-toggle]');
const navMenu = $('[data-nav-menu]');
const themeToggle = $('[data-theme-toggle]');
const modulePanel = $('[data-module-panel]');
const calculator = $('[data-calculator]');

const modules = {
  growth: {
    title: 'Growth Engine',
    body: 'Map every community entry point into a measurable path: visitor, subscriber, contributor, paid member, client, partner.',
    points: ['Landing page conversion blocks', 'Contributor onboarding checklist', 'Campaign performance metrics'],
  },
  revenue: {
    title: 'Revenue Ledger',
    body: 'Track the practical revenue model behind the community: memberships, services, sponsorships, grants, and ecosystem partnerships.',
    points: ['MRR and paid member assumptions', 'Sponsor and client pipeline view', 'Transparent revenue categories'],
  },
  governance: {
    title: 'Governance Desk',
    body: 'Define how contributors propose improvements, review work, document decisions, and protect the community from unclear authority.',
    points: ['Proposal template structure', 'Decision log concept', 'Treasury reporting principles'],
  },
  builders: {
    title: 'Builder Network',
    body: 'Organize developers, designers, writers, marketers, and operators around visible tasks and measurable contribution quality.',
    points: ['Open task board concept', 'Contributor reputation notes', 'Bounty-ready issue structure'],
  },
};

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('trihexar-theme', theme);
  themeToggle.textContent = theme === 'light' ? '☾' : '◐';
}

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

function closeMenu() {
  navMenu.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function renderModule(key) {
  const selected = modules[key];
  if (!selected || !modulePanel) return;

  modulePanel.innerHTML = `
    <p class="eyebrow">Selected module</p>
    <h3>${selected.title}</h3>
    <p>${selected.body}</p>
    <ul>${selected.points.map((point) => `<li>${point}</li>`).join('')}</ul>
  `;
}

function calculateRevenue() {
  if (!calculator) return;

  const members = Number(calculator.elements.members.value || 0);
  const conversion = Number(calculator.elements.conversion.value || 0) / 100;
  const price = Number(calculator.elements.price.value || 0);
  const churn = Number(calculator.elements.churn.value || 0);
  const paidMembers = Math.max(0, Math.round(members * conversion));
  const mrr = paidMembers * price;

  $('[data-mrr]').textContent = formatCurrency(mrr);
  $('[data-paid]').textContent = `${paidMembers.toLocaleString('en-US')} paid members · ${churn}% churn assumption`;
}

function animateCounters() {
  $$('[data-counter]').forEach((counter) => {
    const target = Number(counter.dataset.counter || 0);
    const prefix = counter.dataset.prefix || '';
    const suffix = counter.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      counter.textContent = `${prefix}${value.toLocaleString('en-US')}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function setupReveal() {
  const revealItems = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupActiveNav() {
  const links = $$('.nav-menu a[href^="#"]');
  const sections = links
    .map((link) => $(link.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach((section) => observer.observe(section));
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

$$('[data-nav-menu] a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
});

$$('[data-module]').forEach((button) => {
  button.addEventListener('click', () => {
    $$('[data-module]').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderModule(button.dataset.module);
  });
});

calculator?.addEventListener('input', calculateRevenue);

$('[data-year]').textContent = new Date().getFullYear();
setTheme(localStorage.getItem('trihexar-theme') || 'dark');
updateHeader();
renderModule('growth');
calculateRevenue();
setupReveal();
setupActiveNav();
animateCounters();
