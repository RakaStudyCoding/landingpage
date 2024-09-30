// script.js

// Function to add animation classes
function addAnimation(element, animationClass) {
  element.classList.add(animationClass);
  // Remove the class after animation ends
  setTimeout(() => {
      element.classList.remove(animationClass);
  }, 1000); // Duration of the animation
}

// Click animation
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (event) => {
      const target = event.currentTarget;
      addAnimation(target, 'animate-click');
  });
});

// Scroll animation
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('.header-container');
  
  if (scrollPosition > 50) {
      addAnimation(header, 'animate-scroll');
  }
});
