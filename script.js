// Trigger animations when page loads
window.addEventListener('load', function() {
  const aboutSection = document.querySelector('.about');
  const contactSection = document.querySelector('.bottom-box');
  
  // Add a small delay to ensure smooth animation
  setTimeout(() => {
    aboutSection.classList.add('animate');
  }, 200);
  
  // Add contact animation with a longer delay
  setTimeout(() => {
    contactSection.classList.add('animate');
  }, 800);
});
