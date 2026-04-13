/* ============================================
   NESCOLA – Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Page transition overlay ---- */
  const transitionEl = document.getElementById('page-transition');
  const internalLinkSelector = 'a[href]';

  function isSameOriginLink(a) {
    try {
      const url = new URL(a.getAttribute('href'), window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  function isInPageHashLink(a) {
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return false;
    return href.length > 1;
  }

  function shouldHandleLink(a) {
    if (!a) return false;
    if (a.hasAttribute('download')) return false;
    const target = (a.getAttribute('target') || '').toLowerCase();
    if (target === '_blank') return false;

    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    if (href.startsWith('#')) return false;

    if (!isSameOriginLink(a)) return false;

    const url = new URL(href, window.location.href);
    // Don’t animate if it only changes the hash on the same page
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return false;

    return true;
  }

  function startTransitionTo(url) {
    if (!transitionEl) {
      window.location.href = url;
      return;
    }
    if (document.body.classList.contains('is-transitioning')) return;
    document.body.classList.add('is-transitioning');
    // Prevent scroll-jank during transition
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => {
      window.location.href = url;
    }, 520);
  }

  // Exit transition: intercept eligible links
  document.querySelectorAll(internalLinkSelector).forEach(a => {
    a.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!shouldHandleLink(a)) return;
      e.preventDefault();
      const url = new URL(a.getAttribute('href'), window.location.href).toString();
      // Save intent so the next page can play an enter feel
      try { sessionStorage.setItem('nescola_transition', '1'); } catch {}
      startTransitionTo(url);
    });
  });

  // Enter transition: only if we came from a handled navigation
  if (transitionEl) {
    const cameFromTransition = (() => {
      try {
        const v = sessionStorage.getItem('nescola_transition');
        sessionStorage.removeItem('nescola_transition');
        return v === '1';
      } catch {
        return false;
      }
    })();
    if (cameFromTransition) {
      // Start with overlay visible for a beat, then release
      document.body.classList.add('is-transitioning');
      requestAnimationFrame(() => {
        // Let one frame render, then fade away
        document.body.classList.remove('is-transitioning');
        document.body.style.overflow = '';
      });
    }
  }

  /* ---- Loader ---- */
  const loader = document.getElementById('loader');
  if (loader) {
    const pctEl = document.getElementById('loader-pct');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const totalMs = reduce ? 700 : 1650;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / totalMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const pct = Math.round(eased * 100);
      if (pctEl) pctEl.textContent = pct + '%';
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    window.setTimeout(() => loader.classList.add('hidden'), reduce ? 800 : 2000);
  }

  /* ---- Custom Cursor ---- */
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && isFinePointer && cursor && follower) {
    // Hide until first mouse move to prevent top-left flash on reload
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
    let cursorReady = false;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';

      if (!cursorReady) {
        cursorReady = true;
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
      }
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top  = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, .product-card, .news-card, .sustain-pillar, .commitment-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
    });
  }

  /* ---- Navbar scroll ---- */
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---- Mobile Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Observe existing reveal elements
  revealEls.forEach((el, i) => revealObserver.observe(el));

  /* ---- Staggered children reveal ---- */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.classList.add('reveal');
      child.dataset.delay = i * 100;
      revealObserver.observe(child);
    });
  });

  /* ---- Counter Animation ---- */
  const counterEls = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.innerHTML = prefix + value + '<span>' + suffix + '</span>';
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));

  /* ---- Progress Bar ---- */
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ---- Back to Top ---- */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Parallax on Hero shapes ---- */
  const parallaxEls = document.querySelectorAll('.hero-shape');
  if (!reduceMotion) window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    parallaxEls.forEach((el, i) => {
      const speed = 0.2 + i * 0.1;
      el.style.transform = `translateY(${sy * speed}px)`;
    });
  }, { passive: true });

  /* ---- Marquee duplicate ---- */
  const track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---- Partners carousel duplicate ---- */
  const partnersTrack = document.querySelector('.partners-track');
  if (partnersTrack) {
    partnersTrack.innerHTML += partnersTrack.innerHTML;
  }

  /* ---- Smooth active nav link ---- */
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });

  /* ---- Product filter (products page) ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.products-full .product-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  /* ---- Form submit (demo) ---- */
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'var(--green-mid)';
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
        }, 3000);
      }, 1400);
    });
  }

  /* ---- Hover tilt on product cards ---- */
  if (!reduceMotion) document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${y}deg)`;
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- Premium hover glow tracking (news cards) ---- */
  if (!reduceMotion) document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });

});
