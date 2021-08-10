$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow_left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow_right.svg" alt=""></button>',
        asNavFor: '.thumbs',

    });
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,

    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();
    });
});