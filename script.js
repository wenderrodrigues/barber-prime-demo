
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const aberto = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(aberto));
  menuButton.textContent = aberto ? '✕' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('ano').textContent = new Date().getFullYear();

document.getElementById('agendar').addEventListener('click', () => {
  alert('Esta é uma demonstração. No site do cliente, este botão abrirá o WhatsApp comercial dele.');
});
