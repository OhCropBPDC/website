var slideIndex = 0;
var slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startSlideShow();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startSlideShow();
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function startSlideShow() {
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000); // Change image every 5 seconds
}

// Initialize the slideshow
showSlides(slideIndex);
startSlideShow();
