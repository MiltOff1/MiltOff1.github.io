// Прогресс-бар при скролле
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.width = scrolled + '%';
  }
});

// Создание плавающих частиц
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  
  const colors = ['var(--accent-cyan)', 'var(--accent-purple)', 'var(--accent-green)', 'var(--accent-orange)'];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 15000);
}

// Создаем частицы каждые 2 секунды
setInterval(createParticle, 2000);

// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
  // Добавляем прогресс-бар
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.innerHTML = '<div class="progress-fill"></div>';
  document.body.prepend(progressBar);
  
  // Наблюдаем за стадиями
  const stages = document.querySelectorAll('.stage');
  stages.forEach(stage => observer.observe(stage));
  
  // Добавляем glitch-эффект для заголовка
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.setAttribute('data-text', h1.textContent);
  }
});

// Интерактивные формулы
document.addEventListener('click', (e) => {
  if (e.target.closest('.formula-container')) {
    const container = e.target.closest('.formula-container');
    container.style.transform = 'scale(1.05)';
    setTimeout(() => {
      container.style.transform = 'scale(1.02)';
    }, 200);
  }
});
