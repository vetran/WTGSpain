/**
 * Created by Brusque on 15.12.2017.
 */
$('.slick').slick({
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: 'linear'
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