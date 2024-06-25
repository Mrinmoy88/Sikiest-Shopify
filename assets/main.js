// Banner Slider
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],
    autoplayTimeout: 5000,
    smartSpeed: 2500,
    // animateOut: 'pulseOut',
    // animateIn: 'pulseIn',
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive:{
        0:{
            items: 1,
        },
        767:{
            items: 1,
        },
        992:{
            items: 1,
        },
        1200:{
            items: 1,
        }
    }
});

// Testimonial Slider
$('.common-tlist-slider').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// Deal of the Month Slider
$('.ad-dom-slider').owlCarousel({
    loop:false,
    margin:0,
    dots: false,
    nav:true,
    navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
    ],
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
})


//Related Product
$('.related-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.navbar').addClass('header-fixed');
        }
        else {
            $('.navbar').removeClass('header-fixed');
        }
    });
    animate();
});

$(document).ready( function () {
    //If your <ul> has the id "glasscase"
    $('.glasscase-slider').glassCase({ 
           'thumbsPosition': 'bottom', 
        'widthDisplayPerc' : 100,
        isDownloadEnabled: false,
    });
});