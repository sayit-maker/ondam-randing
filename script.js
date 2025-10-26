const header = document.querySelector('header');
const bottomBanner = document.querySelector('.bottom-banner');
const footer = document.querySelector('.footer');
const fadeEls = document.querySelectorAll('.fade-in');

let ticking = false;
const scrollCallbacks = [];

const runScrollEffects = () => {
  const currentScroll = window.scrollY || window.pageYOffset;

  if (header) {
    header.classList.toggle('scrolled', currentScroll > 50);
  }

  scrollCallbacks.forEach(callback => callback(currentScroll));
  ticking = false;
};

const requestScrollEffects = () => {
  if (!ticking) {
    window.requestAnimationFrame(runScrollEffects);
    ticking = true;
  }
};

window.addEventListener('scroll', requestScrollEffects, { passive: true });
window.addEventListener('load', requestScrollEffects);
requestScrollEffects();

if (fadeEls.length) {
  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => fadeObserver.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }
}

if (bottomBanner && footer) {
  if ('IntersectionObserver' in window) {
    const footerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        bottomBanner.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    footerObserver.observe(footer);
  } else {
    const toggleBanner = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      bottomBanner.classList.toggle('is-hidden', footerTop < windowHeight);
    };

    scrollCallbacks.push(toggleBanner);
    toggleBanner();
  }
}
