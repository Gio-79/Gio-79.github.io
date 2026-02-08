class AppearMotion {
  constructor() {
    this.elements = document.querySelectorAll('.appearMotion');
    this.init();
  }
  
  init() {
    if (!this.elements.length) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Optional: Observer nach erstem Trigger entfernen
          // observer.unobserve(entry.target);
        } else {
          // Optional: Animation wieder rückgängig machen beim Verlassen
          // entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
    
    // Alle Elemente beobachten
    this.elements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  new AppearMotion();
});

// Oder einfache Version:
function initAppearMotion() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.appearMotion').forEach(el => observer.observe(el));
}