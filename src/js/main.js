$(document).ready(function () {


    $('[data-href]').on('click', function(){
        window.location = $(this).data('href')
    });

    $('.sort__view-item').on('click', function(){
        var $this = $(this),
            list = $('.item-list');

        if(!$this.hasClass('active')){
            $('.sort__view-item').removeClass('active');

            if($this.hasClass('sort__view-item--grid')){
                list.removeClass('item-list--horizontal');
                $this.addClass('active');
            }
            else if ($this.hasClass('sort__view-item--list')){
                list.addClass('item-list--horizontal');
                $this.addClass('active');
            }
        }

    });


    $('.menu .menu__item--has-children .menu__link').on('click', function(event){
        event.preventDefault();
        
    });

    $('.header-mobile__button').on('click', function () {
        var $this = $(this),
            body = $('body'),
            header = $this.closest('.header-mobile'),
            target = $('.' + $this.data('target'));

        if(target.hasClass('active')){
            target.removeClass('active');
            body.removeClass('overflowOn');
        }
        else{
            $('[data-mobile-menu]').removeClass('active');
            target.addClass('active');
            body.addClass('overflowOn');
        }
    });

    $('.slick').slick({
        fade: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });

    var mainImages = $('.images__main');
    var thumbImages = $('.images__thumb');

    mainImages.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });

    thumbImages.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false
    });
    thumbImages.find('.images__item').on('click', function () {
        mainImages.slick('slickGoTo', $(this).data('slickIndex'));
    });

    var popupImages = [], images = mainImages.find('.images__item img');

    images.each(function(){
        popupImages.push({
            'src' : $(this).attr('src')
        });
    });

    images.magnificPopup({
        items: popupImages,
        type: 'image',
        gallery: {
            enabled: true
        }
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
        responsive: [{
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
        responsive: [{
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

    (function () {
        var search = $('.search'),
            form = search.find('.search__form'),
            searchItems = search.find('.search__item'),
            searchInput = search.find('.search__input');

        searchInput.each(function () {
            var target = $(this);

            if (target.is('[type="checkbox"]') && target.is(':checked')) {
                target.addClass('checked');
                makeChoices(target);
            }
        });

        searchItems.find('.search__type').on('click', function () {
            var item = $(this).closest('.search__item');

            if (item.hasClass('active')) {
                item.removeClass('active');
            } else {
                searchItems.removeClass('active');
                item.addClass('active');
            }
        });

        function makeChoices(item) {
            var list = $('.search__choices-list'),
                elem = '';

            var itemCategory = item.data('category'),
                itemIndex = item.data('index'),
                itemText = item.parent().find('.search__text').text(),
                text = (item.data('text')) ? itemText + ' ' + item.data('text') : itemText;

            elem += '<li class="search__choices-item">';
            elem += '    <span class="search__choices-icon search__choices-remove" data-category="' + itemCategory + '" data-index="' + itemIndex + '"><i class="fa fa-times" aria-hidden="true"></i></span>';
            elem += '    <span class="search__choices-text">' + text + '</span>';
            elem += '</li>';

            list.append(elem);
        }


        form.on('change', function (event) {
            var target = $(event.target);

            if (target.is('[type="checkbox"]') && target.is(':checked')) {
                target.addClass('checked');
                makeChoices(target);
            }
        });

        $(document).on('click', '.search__input.checked', function () {
            return false
        });

        $(document).on('click', '.search__choices-remove', function () {
            var $this = $(this),
                category = $this.data('category'),
                index = $this.data('index');

            $this.parent().hide(300, function () {
                $(this).remove();
            });

            $('input[data-category="' + category + '"][data-index="' + index + '"]')
                .removeClass('checked')
                .prop('checked', false);
        });

    })();

    $('.news-item__trigger').on('click', function () {
        $(this).remove();
        $('.news-item__wrapper').slideDown('slow');
    });

    $('.item__favorites').on('click', function () {
        var icon = $(this).find('.fa');

        if (icon.hasClass('fa-heart-o')) {
            icon.removeClass('fa-heart-o').addClass('fa-heart');
        } else {
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

    function createRangeSlider(elem){
        var $elem = $(elem);

        noUiSlider.create(elem, {
            start: [0, 6000000],
            connect: true,
            range: {
                'min': [0],
                '0.1%': [0, 10000],
                "50%": [500000, 100000],
                'max': [6000000]
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                postfix: ' €'
            })
        });

        elem.noUiSlider.on('update', function (values, handle) {
            $elem.prev().find('.min-price').text(values[0]);
            $elem.prev().find('.max-price').text(values[1]);

            $elem.parent().find('[name="min_price"]').val(values[0]);
            $elem.parent().find('[name="max_price"]').val(values[1]);
        });
    }


    var ranges = document.getElementsByClassName('range');

    for (var i = 0; i < ranges.length; i++){
        createRangeSlider(ranges[i]);
    }


    // var range = document.getElementById('range');
    //
    // if (range) {
    //     noUiSlider.create(range, {
    //         start: [0, 6000000],
    //         connect: true,
    //         range: {
    //             'min': [0],
    //             '0.1%': [0, 10000],
    //             "50%": [500000, 100000],
    //             'max': [6000000]
    //         },
    //         format: wNumb({
    //             decimals: 0,
    //             thousand: ',',
    //             postfix: ' €'
    //         })
    //     });
    //     range.noUiSlider.on('update', function (values, handle) {
    //
    //         $('#min-price').text(values[0]);
    //         $('#max-price').text(values[1]);
    //
    //         $('[name="min_price"]').val(values[0]);
    //         $('[name="max_price"]').val(values[1]);
    //     });
    // }

    $('.search__additional-trigger').on('click', function(){
        if($(this).hasClass('closed')){
            $(this).addClass('hidden');
            $('.search__additional-list').removeClass('hidden');
            $('.search__additional-trigger.opened').removeClass('hidden');
        }
        else if($(this).hasClass('opened')){
            $(this).addClass('hidden');
            $('.search__additional-list').addClass('hidden');
            $('.search__additional-trigger.closed').removeClass('hidden');
        }
    });
    
    $(window).scroll(function () {
        var $this = $(this);

        if ($this.scrollTop() >= 1000) {
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