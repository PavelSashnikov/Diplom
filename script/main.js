// function showSlide(slideNumber) {
//     const slides = document.querySelector('.slider__inner').children;
//     let currentSlideIndex;
//     Array.prototype.forEach.call(slides, (slide, i) => {
//         if (!slide.classList.contains('hide')) {
//             slide.classList.add('hide');
//             currentSlideIndex = i;
//         }
//     });
//     let nextSlideIndex;
//     if (currentSlideIndex >= slides.length-1) {
//         nextSlideIndex = 0;
//     } else {
//         nextSlideIndex = currentSlideIndex + 1;
//     }
//     slides[nextSlideIndex].classList.remove('hide');
// }
// setInterval(showSlide, 2000);

        // JQuery

$(function() {

    $('header .top nav div').on('click', function() {

        $('header .top nav ul').slideToggle(300, function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        })
    })

    $(document).ready(function() {
        $('.slider__inner').cycle({
        fx: 'fade',
        timeout: 1000 });
        });

                //height for images
            
    // var width = parseInt($('.about img').css('width'));
    // var height = width / 3;
    // $('.about img').css('height', height);

})