// Loading screen functionality
window.addEventListener('load', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const mainContent = document.querySelector('.main-content');
  
  // Hide loading screen after 4 seconds
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    
    // Show main content after loading screen fades out
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.classList.add('show');
      
      // Trigger existing animations
      const aboutSection = document.querySelector('.about');
      const contactSection = document.querySelector('.bottom-box');
      const cards = document.querySelectorAll('.card');
      
      setTimeout(() => {
        aboutSection.classList.add('animate');
      }, 400);
      
      setTimeout(() => {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 200); // Stagger the card animations
        });
      }, 800);
      
      setTimeout(() => {
        contactSection.classList.add('animate');
      }, 1400);
      
    }, 500); // Wait for fade-out transition
  }, 4000); // 4 seconds loading time
});
