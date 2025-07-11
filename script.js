// Typewriter
const phrases = ["Software Engineer", "FullStack Developer", "Writer"];
const el = document.getElementById("typewriter");
const T = 100, P = 2000;
let p = 0, c = 0, d = false;

function tick() {
  const str = phrases[p];
  el.textContent = str.substring(0, c);
  el.style.borderRight = d ? "none" : "4px solid";
  if (!d) {
    if (c < str.length) setTimeout(() => { c++; tick() }, T);
    else setTimeout(() => { d = true; tick() }, P);
  } else {
    if (c > 0) setTimeout(() => { c--; tick() }, T / 2);
    else { d = false; p = (p + 1) % phrases.length; setTimeout(tick, 500); }
  }
}
tick();

// Floating Logos
const logos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
];

const container = document.getElementById('floating-logos');
for (let i = 0; i < 30; i++) {
  const img = document.createElement('img');
  img.src = logos[Math.floor(Math.random() * logos.length)];
  img.className = 'floating-logo';
  const x1 = (Math.random() * 120 - 10).toFixed(2) + 'vw';
  const y1 = (Math.random() * 120 - 10).toFixed(2) + 'vh';
  const x2 = (Math.random() * 120 - 10).toFixed(2) + 'vw';
  const y2 = (Math.random() * 120 - 10).toFixed(2) + 'vh';
  const s  = (Math.random() * 0.5 + 0.5).toFixed(2);
  img.style.setProperty('--x1', x1);
  img.style.setProperty('--y1', y1);
  img.style.setProperty('--x2', x2);
  img.style.setProperty('--y2', y2);
  img.style.setProperty('--s', s);
  img.style.animationDuration = (Math.random() * 20 + 10) + 's';
  container.appendChild(img);
}
