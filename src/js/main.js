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
    prevArrow: $('.clients__arrow--left')
});

$('.staff__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $('.staff__arrow--right'),
    prevArrow: $('.staff__arrow--left')
});

$('.item__favorites').on('click', function(){
    var icon = $(this).find('.fa');

    if(icon.hasClass('fa-heart-o')){
        icon.removeClass('fa-heart-o').addClass('fa-heart');
    }
    else{
        icon.removeClass('fa-heart').addClass('fa-heart-o');
    }
});

$('select').chosen({disable_search_threshold: 10});