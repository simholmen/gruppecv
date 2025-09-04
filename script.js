window.addEventListener('scroll', function () {
    const bg = document.querySelector('.full-picture-bg');
    const scrolled = window.scrollY;
    // Move the background up at half the scroll speed for parallax
    bg.style.transform = `translateY(${scrolled * 0.5}px)`;
});

const galleryImages = [
    { src: "bilder/lena_siri_syst.jpg", caption: "Lena og Siri på stand med Systematicus" },
    { src: "bilder/simen_lars_gis.jpeg", caption: "Simen og Lars presenterer GIS-løsningen" },
    { src: "bilder/ingri_fadderstyret2.jpeg", caption: "Ingri på stand med resten av Fadderstyret" }
];

let currentImage = 0;

function renderGalleryDots() {
    const dotsContainer = document.getElementById('gallery-dots');
    dotsContainer.innerHTML = '';
    galleryImages.forEach((img, idx) => {
        const dot = document.createElement('button');
        dot.className = 'gallery-dot' + (idx === currentImage ? ' active' : '');
        dot.setAttribute('aria-label', `Bilde ${idx + 1}`);
        dot.addEventListener('click', () => {
            currentImage = idx;
            updateGallery();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateGallery() {
    const img = document.getElementById('gallery-image');
    const caption = document.getElementById('gallery-caption');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = galleryImages[currentImage].src;
        caption.textContent = galleryImages[currentImage].caption;
        img.style.opacity = 1;
        renderGalleryDots();
    }, 150);
}

document.querySelector('.gallery-arrow.left').addEventListener('click', () => {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
});

document.querySelector('.gallery-arrow.right').addEventListener('click', () => {
    currentImage = (currentImage + 1) % galleryImages.length;
    updateGallery();
});

// Optional: Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    } else if (e.key === 'ArrowRight') {
        currentImage = (currentImage + 1) % galleryImages.length;
        updateGallery();
    }
});

// Initialize gallery on page load
updateGallery();