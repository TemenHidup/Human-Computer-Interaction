    let slideIndex = 1;
    showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    slideIndex = (slideIndex > slides.length) ? 1 : (slideIndex < 1) ? slides.length : slideIndex;

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex - 1) ? 'block' : 'none';
    });
}
