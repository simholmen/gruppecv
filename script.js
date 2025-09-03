window.addEventListener('scroll', function () {
    const bg = document.querySelector('.full-picture-bg');
    const scrolled = window.scrollY;
    // Move the background up at half the scroll speed for parallax
    bg.style.transform = `translateY(${scrolled * 0.5}px)`;
});