$('.owl-carousel') .owlCarousel({
    items:1,
    lazyLoad: true,
    loop: true,
    margin: 10
});
$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .item-nav').toggleClass('active');
    });
})