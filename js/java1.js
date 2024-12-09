window.onscroll = function() {makeHeaderSticky()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function makeHeaderSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Animation for elements
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.animate');
  elements.forEach(function(element) {
    element.classList.add('animated');
  });

  // Animation for text boxes
  var aboutBox = document.querySelector('.text-box.about');
  var contactBox = document.querySelector('.text-box.contact');
  var projectsBox = document.querySelector('.text-box.projects'); // Added projects box

  aboutBox.style.transform = 'translateX(-100%)';
  contactBox.style.transform = 'translateX(100%)';
  projectsBox.style.transform = 'translateY(100%)'; // Slide in from below

  setTimeout(function() {
    aboutBox.style.transition = 'transform 1s ease-in-out';
    contactBox.style.transition = 'transform 1s ease-in-out';
    projectsBox.style.transition = 'transform 1s ease-in-out'; // Added transition for projects box
    aboutBox.style.transform = 'translateX(300px)';
    contactBox.style.transform = 'translateX(-300px)';
    projectsBox.style.transform = 'translateY(0)'; // Slide back down to original position
  }, 100);

  // Hover animation for text boxes
  var textBoxes = document.querySelectorAll('.text-box');
  textBoxes.forEach(function(box) {
    box.addEventListener('mouseover', function() {
      box.style.transform += ' scale(1.05)';
    });
    box.addEventListener('mouseout', function() {
      box.style.transform = box.style.transform.replace(' scale(1.05)', '');
    });
  });
});
