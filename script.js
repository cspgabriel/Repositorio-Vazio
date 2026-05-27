// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Fade-up animation on scroll
const fadeEls = document.querySelectorAll(
  '.card, .badge, .stat, .dep-card, .gal-item, .credenciais li, .contato-link, .step'
);
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.15 }
);
fadeEls.forEach(el => { el.classList.add('fade-up'); observer.observe(el); });

// Form submit (WhatsApp redirect)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const modalidade = document.getElementById('modalidade').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  const text = encodeURIComponent(
    `Olá Daniel! Meu nome é ${nome}.\n` +
    `Telefone: ${telefone}\n` +
    (modalidade ? `Tenho interesse em: ${modalidade}\n` : '') +
    (mensagem ? `Mensagem: ${mensagem}` : 'Gostaria de saber mais sobre as aulas!')
  );

  window.open(`https://wa.me/55?text=${text}`, '_blank');
});
