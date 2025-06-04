// javascript qui gere l animation de transition
function transitionToPage(href) {
    const overlay = document.getElementById('page-transition');
    if (!overlay) {
      window.location.href = href;
      return;
    }
  
    overlay.classList.add('active');
  
    setTimeout(() => {
      overlay.classList.add('out');
    }, 700); 
  
    setTimeout(() => {
      window.location.href = href;
    }, 1400); 
  }
  
  window.addEventListener('pageshow', () => {
    const overlay = document.getElementById('page-transition');
    if (overlay) {
      overlay.classList.remove('active', 'out');
    }
  });
  