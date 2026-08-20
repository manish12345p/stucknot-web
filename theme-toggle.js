// Synchronously apply theme to prevent FOUC when this script is loaded in <head>
(function () {
  const savedTheme = localStorage.getItem('stucknot-theme') || 'dark';
  const htmlEl = document.documentElement;
  if (savedTheme === 'light') {
    htmlEl.classList.remove('dark-theme');
    htmlEl.classList.add('light-theme');
  } else {
    htmlEl.classList.remove('light-theme');
    htmlEl.classList.add('dark-theme');
  }
})();

class StucknotThemeToggle extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initEvents();
  }

  render() {
    const isLight = document.documentElement.classList.contains('light-theme');
    this.innerHTML = `
      <button class="theme-toggle" aria-label="Toggle theme">
        ${isLight
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> Dark Mode'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> Light Mode'}
      </button>
    `;
  }

  initEvents() {
    const btn = this.querySelector('.theme-toggle');
    if (!btn) return;

    const htmlEl = document.documentElement;

    btn.addEventListener('click', () => {
      if (htmlEl.classList.contains('dark-theme')) {
        // Switch to Light
        htmlEl.classList.remove('dark-theme');
        htmlEl.classList.add('light-theme');
        localStorage.setItem('stucknot-theme', 'light');
      } else {
        // Switch to Dark
        htmlEl.classList.remove('light-theme');
        htmlEl.classList.add('dark-theme');
        localStorage.setItem('stucknot-theme', 'dark');
      }

      // Re-render button text
      this.render();
      this.initEvents();
    });
  }
}

customElements.define('stucknot-theme-toggle', StucknotThemeToggle);
