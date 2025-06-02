document.addEventListener('DOMContentLoaded', () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  // link.href = 'https://example.com/styles.css'; // путь к твоему CSS
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'; 
  link.type = 'text/css';
  document.head.appendChild(link);
});