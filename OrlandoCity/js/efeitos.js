$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }

});

var owl = $(".owl-carousel");
owl.owlCarousel();

    $('#btn-news-prev').click(function(){

        owl.trigger('prev.owl.carousel', [500]);

})

    $('#btn-news-next').click(function(){
    
        owl.trigger('next.owl.carousel', [500]);

})

    $( "#page-up" ) .click(function(event){
        event.preventDefault();
        $('html, body').animate({
            duration: '2',
            scrollTop: 0
        }, 0);

});

    $('#btn-bars, #menu-mobile-mask, .btn-light').on("click", function(){

        $('header').toggleClass("open-menu");

});

    $("#btn-search").on("click", function(){

        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();

    })