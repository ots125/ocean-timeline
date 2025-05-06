// Fade-in animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const revealOnScroll = () => {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const toggleButton = document.getElementById("mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});