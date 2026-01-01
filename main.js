let currentSlide = 0;
let slides = [];
let totalSlides = 0;
let carouselInner = null;

function initCarousel() {
    carouselInner = document.getElementById("carouselInner");

    // Page may not have carousel
    if (!carouselInner) return;

    slides = document.querySelectorAll(".carousel-slide");
    totalSlides = slides.length;

    if (totalSlides === 0) return;

    // ensure starting position
    carouselInner.style.transform = "translateX(0%)";
    currentSlide = 0;

    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    if (!carouselInner || totalSlides === 0) return;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* ✅ WAIT FOR IMAGES */
window.addEventListener("load", initCarousel);