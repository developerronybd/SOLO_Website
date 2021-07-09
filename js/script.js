/*=================================
            Preloader
===================================*/
$(window).on('load', function () { //make sure whole site is loaded 
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut();
});

/*=================================
             navigation 
===================================*/
/* Show & hide whit navigation */
$(function () {
     //show hide nav on page load
        showHideNav();
    
    $(window).scroll(function(){
       
        //show hide nav on whindoe's scroll
        showHideNav();
        
    });
    function showHideNav(){
         if($(window).scrollTop() >50 ){
           //show white nav
             $("nav").addClass("white-nav-top");
            // Show dark logo 
            $("navbar-brand img").attr("src", "img/path");
             /* show back to top */
             $("#back-to-top").fadeIn();
           }
           else{
               //hide white nav
               $("nav").removeClass("white-nav-top");
               // show logo
               $("navbar-brand img").attr("src", "img/path");
               /* hide back to top */
             $("#back-to-top").fadeOut();
           }
    }
});

/* smoth scrolling*/
$(function () {
    
    $("a.smoth-scroll").click(function(event){
        
        event.preventDefault();
        // get section id like #about , #services ,#work , #team anc etc 
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop:$(section_id).offset().top - 59
        }, 1250 ,"easeInOutExpo");
    });

});

/* back */

/*=================================
                Team
===================================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*=================================
            Progress Bar 
===================================*/
$(function () {

    $("#progress-element").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1500);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


});

/*=================================
          Responsive Tab 
===================================*/
$(function () {
    $("#services-tabs").responsiveTabs({

    });

});
/*=================================
          Portfolio  
===================================*/
$(window).on('load', function () {
    //Instalize Isotope
    $("#isotope-container").isotope({

    });
    // filter item on button click
    $("#isotope-filters").on('click', 'button', function () {
        // get filter value 
        var filterValue = $(this).attr('data-filter');
        // filter portfolio Items 
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // Active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*=================================
            Magnifier  
===================================*/
/*$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
        enabled: true
        }
    });
});*/


/*=================================
            testimonial  
===================================*/
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*=================================
             clients
===================================*/
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*=================================
             Animated
===================================*/
/* animate on scroll */

$(function () {
    new WOW().init();

});
/* home animation on page load */

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-heading-3").addClass("animated fadeInRight");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down").addClass("animated fadeInDown infinite");
    
});


/*=====================================
              mobile menu 
=======================================*/
$(function () {
    /* show mobile nav */
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
        /* hide open button */
        $("#mobile-nav-open-btn").css("display","none");
    });
    
    /* hide mobile nav */
     $("#mobile-nav-close-btn, #mobile-nav").click(function(){
        $("#mobile-nav").css("height","0%");
         /* show open button */
         $("#mobile-nav-open-btn").css("display","block");
    });
});

