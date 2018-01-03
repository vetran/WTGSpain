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
        display_disabled_options: false,
        width: "100%"
    });


    (function(){
        var search = $('.search'),
            form = search.find('.search__form'),
            searchItems = search.find('.search__item');
        
        searchItems.find('.search__type').on('click', function(){
            var item = $(this).parent();

            if(item.hasClass('active')){
                item.removeClass('active');
            }
            else{
                searchItems.removeClass('active');
                item.addClass('active');
            }

        });

        function makeChoices() {
            var list = $('.search__choices-list');

            var elem = '';

            $('.search__input:checked').each(function(){

                elem += '<li class="search__choices-item">';
                elem += '    <span class="search__choices-icon"><i class="fa fa-times" aria-hidden="true"></i></span>';
                elem += '    <span class="search__choices-text">'+ $(this).parent().text() + '</span>';
                elem += '</li>';

            });
            list.html(elem);
        }

        form.on('change', function(event){
            var target = $(event.target);

            target.prop('disabled', true);
            makeChoices();
        })

    })();




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