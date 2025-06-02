function transitionToPage(href) {
    const overlay = document.getElementById('page-transition');
    if (!overlay) {
      window.location.href = href;
      return;
    }
  
    overlay.classList.add('active');
  
    setTimeout(() => {
      overlay.classList.add('out');
    }, 700); // entrée complète
  
    setTimeout(() => {
      window.location.href = href;
    }, 1400); // sortie terminée
  }
  
  window.addEventListener('pageshow', () => {
    const overlay = document.getElementById('page-transition');
    if (overlay) {
      overlay.classList.remove('active', 'out');
    }
  });
  