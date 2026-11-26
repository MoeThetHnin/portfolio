// Theme: saved choice, otherwise follow the system setting
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile navigation
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Header shadow on scroll
  var header = document.querySelector('header.site');
  var onScroll = function () { if (header) header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Project filters
  var filters = document.querySelectorAll('.filter');
  var cases = document.querySelectorAll('.case[data-cat]');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      var cat = f.getAttribute('data-filter');
      filters.forEach(function (x) { x.setAttribute('aria-pressed', x === f ? 'true' : 'false'); });
      cases.forEach(function (c) {
        var show = cat === 'all' || c.getAttribute('data-cat').split(' ').indexOf(cat) !== -1;
        c.hidden = !show;
        if (show) c.classList.add('in');
      });
    });
  });

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
