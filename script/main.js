
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

    $('.supplies a').on('click', function() {
        $(this).css('color', '#fcd041');
        $(this).siblings('a').removeAttr('style');
    })

                //height for images
            
    // var width = parseInt($('.about img').css('width'));
    // var height = width / 3;
    // $('.about img').css('height', height);

})