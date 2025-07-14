// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// navbar cuando cambia la fuente
const links = document.querySelectorAll('.navbar-nav .nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
