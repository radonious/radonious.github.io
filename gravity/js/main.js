$(function () {
    $('.services-carousel').owlCarousel({
        loop:true,
        margin:30,
        startPosition: 1,
        nav:true,
        dots: false,
        autoWidth: true,
        navText:['<img src="img/left.svg">','<img src="img/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:250,
        startPosition: 0,
        nav:true,
        dots: false,
        navText:['<img src="img/left.svg">','<img src="img/right.svg">'],
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});
