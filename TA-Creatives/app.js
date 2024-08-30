jQuery(document).ready(function($) {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

console.log("JavaScript file is loaded and running!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");
});
