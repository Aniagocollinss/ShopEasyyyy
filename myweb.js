document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in, .fade-slide-left, .fade-slide-right, .mission-vision, .timeline-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  elements.forEach(element => {
    observer.observe(element);
  });

  // Also apply the same effect to all '.fade-in' elements
  const fadeInElements = document.querySelectorAll('.fade-in');

  fadeInElements.forEach(element => {
    observer.observe(element);
  });

  // Specifically observe the footer if it has a fade-in effect
  const footer = document.querySelector('.fade-in');

  if (footer) {
    observer.observe(footer);
  }
});






