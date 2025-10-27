// 헤더 색상 전환
// 기존 코드 유지
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add('visible');
    }
  });
});




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

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
  on: {
    slideChange: function () {
      const fraction = document.querySelector(".swiper-fraction");
      const total = this.slides.length - 2; // loop mode일 때 가짜 슬라이드 제외
      fraction.textContent = `${this.realIndex + 1} / ${total}`;
    },
  },
});

/* ✅ 재생/일시정지 버튼 */
const playPauseBtn = document.querySelector(".swiper-play-pause");
let isPlaying = true;

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    swiper.autoplay.stop();
    playPauseBtn.classList.add("playing");   // ▶️ 재생 이미지로 변경
  } else {
    swiper.autoplay.start();
    playPauseBtn.classList.remove("playing"); // ⏸️ 일시정지 이미지로 변경
  }
  isPlaying = !isPlaying;
});


 

