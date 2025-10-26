// ✅ 헤더 색상 전환
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ✅ 부드러운 스크롤 이동
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ✅ 스크롤 시 fade-in 효과
const fadeEls = document.querySelectorAll('.fade-in');

function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ✅ 푸터 접근 시 하단 고정 배너 숨기기
const bottomBanner = document.querySelector('.bottom-banner');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    // 푸터가 화면에 보이면 배너 숨기기
    bottomBanner.style.opacity = '0';
    bottomBanner.style.pointerEvents = 'none';
  } else {
    // 푸터 영역을 벗어나면 다시 보이기
    bottomBanner.style.opacity = '1';
    bottomBanner.style.pointerEvents = 'auto';
  }
});
