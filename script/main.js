function showSlide(slideNumber) {
    const slides = document.querySelector('.slider__inner').children;
    let currentSlideIndex;
    Array.prototype.forEach.call(slides, (slide, i) => {
        if (!slide.classList.contains('hide')) {
            slide.classList.add('hide');
            currentSlideIndex = i;
        }
    });
    let nextSlideIndex;
    if (currentSlideIndex >= slides.length-1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    slides[nextSlideIndex].classList.remove('hide');
}
setInterval(showSlide, 2000);