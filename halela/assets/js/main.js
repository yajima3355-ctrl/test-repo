(function() {
  'use strict';

  // IntersectionObserver for reveal animations
  const revealTargets = document.querySelectorAll('.reveal-on-scroll');
  const reveal = (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  };
  const io = new IntersectionObserver(reveal, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });
  revealTargets.forEach(el => io.observe(el));

  // Gentle parallax on hero visual
  const hero = document.querySelector('.section-hero');
  const heroVisual = document.querySelector('.hero-visual');
  if (hero && heroVisual) {
    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      heroVisual.style.transform = `translateY(${progress * 10}px)`;
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Smooth scroll for in-page anchors (Bootstrap already handles collapse)
  document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.pageYOffset - 72; // header offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, { passive: false });

})();
