class StucknotNavbar extends HTMLElement {
  connectedCallback() {
    const basePath = this.getAttribute('base-path') || './';
    const activePage = this.getAttribute('active-page') || 'home';

    this.innerHTML = `
      <header class="header" role="banner">
        <div class="container">
          <a href="${basePath}index.html" aria-label="StuckNot Home">
            <span class="logo-img" role="img" aria-label="StuckNot logo"></span>
          </a>
          <button class="mobile-menu-btn" aria-label="Toggle navigation" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          <div class="header-nav-wrapper" id="mobile-nav">
            <nav class="nav-links" aria-label="Main navigation" id="nav-main-links">
              <a href="${basePath}index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
              <a href="${basePath}community/index.html" class="${activePage === 'community' ? 'active' : ''}">Community</a>
              <a href="${basePath}work/index.html" class="${activePage === 'work' ? 'active' : ''}">Work</a>
              <a href="${basePath}programs/index.html" class="${activePage === 'programs' ? 'active' : ''}">Programs</a>
              <a href="${basePath}learn/index.html" class="${activePage === 'learn' ? 'active' : ''}">Learn</a>
              <a href="${basePath}community/index.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
            </nav>
          </div>
        </div>
      </header>
    `;

    this.initInteractions();
  }

  initInteractions() {
    const menuBtn = this.querySelector('.mobile-menu-btn');
    const mobileNav = this.querySelector('#mobile-nav');
    const body = document.body;
    const navLinks = this.querySelectorAll('#mobile-nav .nav-links a');

    if (menuBtn && mobileNav) {
      const toggleMenu = () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('open');
        body.classList.toggle('menu-open');
      };

      menuBtn.addEventListener('click', toggleMenu);
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (mobileNav.classList.contains('open')) toggleMenu();
        });
      });
    }

    const header = this.querySelector('.header');
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (header) header.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger scroll check on load in case the page is already scrolled down
    if (header && window.scrollY > 60) {
      header.classList.add('scrolled');
    }
  }
}

customElements.define('stucknot-navbar', StucknotNavbar);
