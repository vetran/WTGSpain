$(document).ready(function () {

    $('.slick').slick({
        fade: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });

    $('.clients__list').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        pauseOnDotsHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.clients__arrow--right'),
        prevArrow: $('.clients__arrow--left'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

    $('.staff__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.staff__arrow--right'),
        prevArrow: $('.staff__arrow--left'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('select').chosen({
        disable_search_threshold: 10,
        hide_results_on_select: true,
        search_contains: true,
        width: "100%"
    });


    $('.item__favorites').on('click', function () {
        var icon = $(this).find('.fa');

        if (icon.hasClass('fa-heart-o')) {
            icon.removeClass('fa-heart-o').addClass('fa-heart');
        }
        else {
            icon.removeClass('fa-heart').addClass('fa-heart-o');
        }
    });


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.leave-request').on('click', function (e) {
        e.preventDefault();

        var request = $('.request');

        $('body,html').animate({
            scrollTop: request.offset().top - 10
        }, 500);

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    $('.to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});