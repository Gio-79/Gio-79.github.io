// Version 1: Einfache Implementierung
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const profileImage = document.getElementById('profileImage');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    // Optional: Direkte JS-Steuerung
    // profileImage.style.width = '64px';
    // profileImage.style.transition = 'width 0.3s ease';
  } else {
    header.classList.remove('scrolled');
    // profileImage.style.width = '';
  }
});


// Einfache Scroll-Erkennung
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('fastNavigationHeader');
    let isVisible = false;
    
    console.log('Script geladen, Header gefunden:', header);
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        console.log('Scroll Position:', scrollPosition);
        
        if (scrollPosition > 50 && !isVisible) {
            console.log('Header sichtbar machen');
            header.classList.add('visible');
            header.classList.add('animate');
            isVisible = true;
        } else if (scrollPosition <= 50 && isVisible) {
            console.log('Header verstecken');
            header.classList.remove('visible');
            header.classList.remove('animate');
            isVisible = false;
        }
    });
    
    // Initial prüfen
    if (window.pageYOffset > 50) {
        header.classList.add('visible');
        isVisible = true;
    }
});