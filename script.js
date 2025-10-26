// 헤더 색상 전환
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// 부드러운 스크롤 이동
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 스크롤 시 fade-in 효과
const fadeEls = document.querySelectorAll('.fade-in');
function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) el.classList.add('visible');
  });
}
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

const bottomBanner = document.querySelector('.bottom-banner');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    bottomBanner.style.opacity = '0';
    bottomBanner.style.pointerEvents = 'none';
  } else {
    bottomBanner.style.opacity = '1';
    bottomBanner.style.pointerEvents = 'auto';
  }
});
