// Smooth scrolling for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    timelineItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if (position < window.innerHeight * 0.8) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateY(50px)';
            item.style.opacity = '0';
        }
    });
});