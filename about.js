// Toggle mobile menu
const btn = document.querySelector('nav button');
const menu = document.querySelector('nav ul');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// (Optional) You can add scroll animations, smooth scrolling, etc. here
// Example: smooth scroll to sections
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});
