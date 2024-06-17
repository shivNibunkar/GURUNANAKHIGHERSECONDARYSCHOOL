(function ($) {
    'use strict';

    // Sticky Menu
    // $(window).scroll(function () {
    //     if ($('header').offset().top > 0) {
    //         $('.top-header ').addClass('hide');
    //         $('.navigation').addClass('nav-bg');
    //     } else {
    //         $('.top-header').removeClass('hide');
    //         $('.navigation').removeClass('nav-bg');
    //     }
    // });


    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'fa fa-chevron-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'fa fa-chevron-right\'></i></button>',
        dots: true
    });
    $('.hero-slider').slickAnimation();

    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    

       $('#myModal').modal('show');




 $(function(){
        $("#myform").submit(function(event){
            event.preventDefault();
        
            $.ajax({
                    url:'tcviewer.php',
                    type:'POST',
                    data:$(this).serialize(),
                    success:function(result){
                        $("#myresponse").html(result);
                    }
            });
        });
    });


	

$('#slider').owlCarousel({
 navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  loop:true,
      items:1,
      autoplay:true,
	  nav:true,
	  navText: ["&lt;","&gt;"],
    animateOut: 'slideOutDown',
    animateIn: 'slideInUp',		  
})

    $(document).ready(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
});
	
	
	$('#info-news').owlCarousel({
  navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:3,
    autoplay:true,
    nav:false,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
          },
          700:{
            items:1,
          },
        1000:{
            items:1,
        }
    }

});


$('#boxs,#news').owlCarousel({
  navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:3,
    autoplay:true,
    nav:false,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
          },
          700:{
            items:2,
          },
        1000:{
            items:2,
        }
    }

});



$('#mmm').owlCarousel({
  navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:3,
    autoplay:true,
    nav:false,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
          },
          700:{
            items:1,
          },
        1000:{
            items:1,
        }
    }

});





$('#myslider').owlCarousel({
    navigation : false,
    slideSpeed : 300,
	animateOut: 'fadeOut',
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})


$('#mysliderone').owlCarousel({
    navigation : false,
    slideSpeed : 300,
    animateOut: 'fadeOut',
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})


$('#photo').owlCarousel({
 navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      loop:true,
      items:1,
      autoplay:true,
      nav:true,
      navText: ["&lt;","&gt;"],
    animateOut: 'slideOutDown',
    animateIn: 'slideInUp',       
})


$('#one,#two,#three,#four,#five,#six,#sevan,#eighth,#nine,#ten').owlCarousel({
    navigation : false,
    slideSpeed : 300,
    animateOut: 'fadeOut',
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})


$('#management,#administration,#faculty').owlCarousel({
  navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    loop:true,
    items:3,
    autoplay:true,
    nav:false,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
          },
          700:{
            items:2,
          },
        1000:{
            items:4,
        }
    }

})




})(jQuery);