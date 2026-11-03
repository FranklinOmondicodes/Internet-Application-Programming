const menu = document.getElementById('menu');
const links = document.getElementById('links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

const theme = document.getElementById('theme');
theme.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  theme.textContent = dark ? '☀' : '☾';
  theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
});

const explanations = {
  html: ['HTML gives a page its structure.', 'HTML defines headings, paragraphs, links, images, lists and forms. The browser reads this structure and displays the page.'],
  css: ['CSS controls how a page looks.', 'CSS sets colours, fonts, spacing and layout. Responsive rules help a website adapt to phones, tablets and desktop screens.'],
  javascript: ['JavaScript makes a page interactive.', 'JavaScript responds to events, checks form input and updates page content. It powers features such as this menu, topic selector and theme switch.']
};
const cards = document.querySelectorAll('.topic-card');
cards.forEach(card => card.addEventListener('click', () => {
  cards.forEach(item => {
    const selected = item === card;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  const info = explanations[card.dataset.topic];
  document.getElementById('detailTitle').textContent = info[0];
  document.getElementById('detailText').textContent = info[1];
}));

const form = document.getElementById('contactForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const name = document.getElementById('name').value.trim();
  document.getElementById('feedback').textContent =
    `Thank you, ${name}. Your demo form passed validation. No message was sent or stored.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
