$(function (){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        ratedFill: "#f2d800",
        readOnly: false,
    });

    $('.tab').click(function(e){
        e.preventDefault();

        $('.tab').removeClass('active');
        $('.tab__item').removeClass('active-tab');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active-tab');
        
    });

    // $('.tab:first').click();

    $('.boards__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="16px" height="14px"><path fill-rule="evenodd"  fill="rgb(247, 247, 247)"d="M15.021,8.000 L3.341,8.000 L7.495,12.241 C7.704,12.425 7.837,12.696 7.837,13.000 C7.837,13.552 7.398,13.999 6.857,13.999 C6.594,13.999 6.355,13.893 6.180,13.721 L6.177,13.724 L0.300,7.724 L0.300,7.724 C0.115,7.542 -0.000,7.287 -0.000,7.004 C-0.000,7.003 0.000,7.002 0.000,7.002 C0.000,7.001 -0.000,7.000 -0.000,6.999 C-0.000,6.717 0.115,6.462 0.300,6.280 L0.300,6.280 L6.177,0.280 L6.177,0.280 C6.353,0.107 6.593,-0.001 6.857,-0.001 C7.398,-0.001 7.837,0.447 7.837,0.999 C7.837,1.269 7.732,1.514 7.562,1.694 L7.562,1.694 L3.344,6.000 L15.021,6.000 C15.561,6.000 16.000,6.447 16.000,7.000 C16.000,7.552 15.561,8.000 15.021,8.000 Z"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="16px" height="14px"><path fill-rule="evenodd"  fill="rgb(247, 247, 247)"d="M16.000,7.002 C16.000,7.002 16.000,7.003 16.000,7.004 C16.000,7.287 15.885,7.542 15.700,7.724 L15.700,7.724 L9.823,13.724 L9.820,13.721 C9.644,13.893 9.406,13.999 9.143,13.999 C8.601,13.999 8.163,13.552 8.163,13.000 C8.163,12.696 8.296,12.425 8.505,12.241 L12.659,8.000 L0.979,8.000 C0.438,8.000 -0.000,7.552 -0.000,7.000 C-0.000,6.447 0.438,6.000 0.979,6.000 L12.655,6.000 L8.437,1.694 L8.438,1.694 C8.268,1.514 8.163,1.269 8.163,0.999 C8.163,0.447 8.601,-0.001 9.143,-0.001 C9.407,-0.001 9.646,0.107 9.823,0.280 L9.823,0.280 L15.700,6.280 L15.700,6.280 C15.885,6.462 16.000,6.717 16.000,6.999 C16.000,7.000 16.000,7.001 16.000,7.002 Z"/></svg></button>',
    });

    $('.images__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.images__slider',
        dots: false,
        focusOnSelect:true,
        centerMode: true,
    });

    $('.video__btn').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    });
    
    $('.team-slider__items').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="16px" height="14px"><path fill-rule="evenodd"  fill="#0022ff"d="M15.021,8.000 L3.341,8.000 L7.495,12.241 C7.704,12.425 7.837,12.696 7.837,13.000 C7.837,13.552 7.398,13.999 6.857,13.999 C6.594,13.999 6.355,13.893 6.180,13.721 L6.177,13.724 L0.300,7.724 L0.300,7.724 C0.115,7.542 -0.000,7.287 -0.000,7.004 C-0.000,7.003 0.000,7.002 0.000,7.002 C0.000,7.001 -0.000,7.000 -0.000,6.999 C-0.000,6.717 0.115,6.462 0.300,6.280 L0.300,6.280 L6.177,0.280 L6.177,0.280 C6.353,0.107 6.593,-0.001 6.857,-0.001 C7.398,-0.001 7.837,0.447 7.837,0.999 C7.837,1.269 7.732,1.514 7.562,1.694 L7.562,1.694 L3.344,6.000 L15.021,6.000 C15.561,6.000 16.000,6.447 16.000,7.000 C16.000,7.552 15.561,8.000 15.021,8.000 Z"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="16px" height="14px"><path fill-rule="evenodd"  fill="#0022ff"d="M16.000,7.002 C16.000,7.002 16.000,7.003 16.000,7.004 C16.000,7.287 15.885,7.542 15.700,7.724 L15.700,7.724 L9.823,13.724 L9.820,13.721 C9.644,13.893 9.406,13.999 9.143,13.999 C8.601,13.999 8.163,13.552 8.163,13.000 C8.163,12.696 8.296,12.425 8.505,12.241 L12.659,8.000 L0.979,8.000 C0.438,8.000 -0.000,7.552 -0.000,7.000 C-0.000,6.447 0.438,6.000 0.979,6.000 L12.655,6.000 L8.437,1.694 L8.438,1.694 C8.268,1.514 8.163,1.269 8.163,0.999 C8.163,0.447 8.601,-0.001 9.143,-0.001 C9.407,-0.001 9.646,0.107 9.823,0.280 L9.823,0.280 L15.700,6.280 L15.700,6.280 C15.885,6.462 16.000,6.717 16.000,6.999 C16.000,7.000 16.000,7.001 16.000,7.002 Z"/></svg></button>',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
          ]
    });

    $('.menu-btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.menu-btn').on('click', function(){
        $(this).toggleClass('menu-btn__active');
    });


});

