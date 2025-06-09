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
      
      setTimeout(() => {
        aboutSection.classList.add('animate');
      }, 400);
      
      setTimeout(() => {
        contactSection.classList.add('animate');
      }, 1000);
      
    }, 500); // Wait for fade-out transition
  }, 4000); // Changed from 3000 to 4000 milliseconds (4 seconds)
});
