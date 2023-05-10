$(document).ready(function() {
	$("img, a, button").on("dragstart", function(event) { 
		event.preventDefault(); 
	});

    let headerCocoen = document.querySelector('.cocoen');

    if(headerCocoen)
	    new Cocoen(headerCocoen);


	$('[data-info]').on('click', function() {
		var name = $(this).data('info');
		var newArr = name.split(';');

		document.querySelector('.modal__title').innerHTML = newArr[0];
		document.querySelector('.modal__subtitle').innerHTML = newArr[1];
		document.querySelector('#orderForm').value = newArr[3];
		document.querySelector('.btn_modal').innerHTML = newArr[2];
	});
    $('.go_to').click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 500); 
        }
        return false;
    });

    var nav = $('.header__top'),
    burgerSticky = $('.header__burger');
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            nav.addClass("header__top_sticky");
            burgerSticky.addClass("header__burger_sticky");
        } else {
            nav.removeClass("header__top_sticky");
            burgerSticky.removeClass("header__burger_sticky");
        }
    });


    var menu = document.querySelector('.menu'),
    burger = document.querySelector('.header__burger');
    linkMenu = document.querySelectorAll('.go_to'),
    burgerLine = document.querySelectorAll('.burger__line');
    burger.addEventListener('click', showMenu);

    for (var i = 0; i < linkMenu.length; i++) {
        linkMenu[i].addEventListener('click', showMenu);
    }

    function showMenu () {
        burger.classList.toggle('header__burger_toggle')
        menu.classList.toggle('menu_active');
    }

    $(function(){
      $("input[name='tel']").mask("+7(999)999-99-99");
  });
    
    if ( $(window).width() > 991 && $("[data-scroll-reveal]").length ) {
        window.scrollReveal = new scrollReveal();
    }
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
        	center: [55.694276167167295,37.74802910185239], 
        	zoom: 11,
        });

        myMap.behaviors.disable([
        	//'drag',
        	'scrollZoom'
        	]);

        var myPin = new ymaps.GeoObjectCollection({}, {
        	iconLayout: 'default#image',
        	iconImageHref: '../img/map.png',
        	iconImageSize: [77, 77],
        	iconImageOffset: [-35,-55]
        });

        var myPlacemark = new ymaps.Placemark([55.694276167167295,37.74802910185239], {
        	balloonContentHeader: 'White Sole',
        	balloonContentBody: 'Адрес: ул. Угрешская, д2/13',
        	hintContent: 'White Sole'
        });

        myPin.add(myPlacemark);
        myMap.geoObjects.add(myPin);
    }

    $('.before_').on('click', function(e){
        $(this).parent().parent().removeClass('after')
        $(this).parent().parent().addClass('before')
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
    })

    $('.after_').on('click', function(e){
        $(this).parent().parent().removeClass('before')
        $(this).parent().parent().addClass('after')
        $(this).addClass('active')
        $(this).siblings().removeClass("active")
    })
    /* himchistka-timberlend */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            480: {
            slidesPerView: 1,
            spaceBetween: 0
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 0
            },
            1024: {
            slidesPerView: 2,
            spaceBetween: 0
            },
            1200: {
            slidesPerView: 2,
            spaceBetween: 0
            },
        }

    });
});
