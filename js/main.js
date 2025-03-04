window.onload = function() {
    window.scrollTo(0, 0);  
};

// preloder
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Simulate a loading delay
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 2000); // Adjust the time as needed

    });

//    AOS animition
AOS.init({
    duration: 1000,   
    easing: 'ease-out',  
    delay: 150,   
    once: false,  //  (Better UX)
    mirror: true, // (Smooth Experience)
    anchorPlacement: 'top-bottom', // 
    offset: 0
});



$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1,
               
            },
            500:{
              items:1,
            },
            600:{
                items:1,
                
            },
            1000:{
                items:2,
                // nav:true,
                
            }
        }
    });
    // Custom Navigation Events
    $('.btn-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.btn-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    // Custom Dots Click Event
    $(".dot").click(function(){
        var slideIndex = $(this).data("slide");
        owl.trigger("to.owl.carousel", [slideIndex, 500]);
        $(".dot").removeClass("active");
        $(this).addClass("active");
    });

    
});

