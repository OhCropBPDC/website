document.getElementById('mobile-menu').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const totalItems = document.querySelectorAll('.testimonial-card').length;
    const itemWidth = document.querySelector('.testimonial-card').offsetWidth + 20; // Include margin

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel(); // Initial update
});
