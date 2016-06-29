(function() {
	/* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;

	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        } 
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) { 
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Awesome burger default */

	var pathA = document.getElementById('pathA'),
		pathB = document.getElementById('pathB'),
		pathC = document.getElementById('pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		trigger = document.getElementById('menu_icon_trigger'),
		toCloseIcon = true,
		dummy = document.getElementById('dummy'),
		wrapper = document.getElementById('menu_icon_wrapper');

	wrapper.style.visibility = 'visible';

	trigger.onclick = function() {
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);

			//dummy.className = 'dummy dummy--active';
		} else {
			outAC(segmentA);
			outB(segmentB);
			outAC(segmentC);

			//dummy.className = 'dummy';
		}
		toCloseIcon = !toCloseIcon;
	};

	/* Scale functions */

	function addScale(m) {
		m.className = 'menu_icon_wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu_icon_wrapper';
	}


})();




$(document).ready(function(){
	$('.menu_icon_trigger').click(function() {
		$(this).parent().toggleClass('active');
		$('.nav_wrapper').toggleClass('active');
	}); 

	$('.faq_accordion_toggle').click(function() {
		$('.faq_accordion_toggle').not($(this)).removeClass('active');		
		$('.faq_accordion_level_2').not($(this).closest('.faq_accordion_item').find('.faq_accordion_level_2')).removeClass('active');

		$(this).toggleClass('active');
		
		$(this).closest('.faq_accordion_item').find('.faq_accordion_level_2').toggleClass('active');
	});

	
	$('.btn_primary').each(function(){
		var this_btn = $(this);
		var cloned = this_btn.find('.btn_primary_inner').clone();  
		cloned.appendTo(this_btn); 
	});

	var $document = $(document),
    $element = $('.header_wrapper'),
    className = 'hasScrolled';
    var bool_on_top = true;

	$document.scroll(function() {
	  if ($document.scrollTop() >= 50) {
	    if (bool_on_top) {
	    	$element.addClass(className);
	    }
	    bool_on_top = false;
	    
	  } else {
	  	if (!bool_on_top) {
	  		$element.removeClass(className);
	  	}	    
	    bool_on_top = true;
	  }
	});

	// $(".slick-prev").hover(function(){
	//     //console.log('hover');
	//     $(this).parent().find('.slick-active .preview_prev').addClass('active');
	// },function(){
	//     //console.log('stop');
	//     $(this).parent().find('.slick-active .preview_prev').removeClass('active');
	// });
	// $(".slick-next").hover(function(){
	//     //console.log('hover');
	//     $(this).parent().find('.slick-active .preview_next').addClass('active');
	// },function(){
	//     //console.log('stop');
	//     $(this).parent().find('.slick-active .preview_next').removeClass('active');
	// });
	// $(".slick-prev, .slick-next").click(function(){
	// 	$(this).parent().find('.slick-active .preview_next').removeClass('active');
	// });

	// $(".slick-prev").hover(function(){
	//     console.log('hover');
	//     $(this).parent().find('.slick-active .preview_prev').addClass('active');
	// },function(){
	//     console.log('stop');
	//     $(this).parent().find('.slick-active .preview_prev').removeClass('active');
	// }); 

	//  			slick HOVER prev-next

	// $(".slick-prev").mouseenter(function(){
	//    // console.log('hover');
	//     $(this).parent().find('.slick-active .preview_prev').addClass('active');	    
	// });
	// $(".slick-next").mouseenter(function(){
	//     //console.log('hover');
	//     $(this).parent().find('.slick-active .preview_next').addClass('active');	    
	// });
	// $('.slide_item_preview').mouseleave(function(){
 //   		// console.log('stop');
 //    	$(this).removeClass('active');
	// });
	// $(".slick-next").click(function() {
	// 	$(this).parent().find('.preview_next').removeClass('active');
	// });
	// $(".slick-prev").click(function() {
	// 	$(this).parent().find(' .preview_prev').removeClass('active');
	
	// });
 

	$slider_prev_btn = $('.owl-prev');
	$slider_next_btn = $('.owl-next');
	// $(".slick-prev")
	// find('.slick-active .preview_prev')

	$slider_prev_btn.mouseenter(function(){
	  
	    $(this).closest('.slider').find('.owl-item.active .preview_prev').addClass('active');	    
	});
	$slider_next_btn.mouseenter(function(){
	    //console.log('hover');
	    $(this).closest('.slider').find('.owl-item.active .preview_next').addClass('active');	    
	});
	$('.slide_item_preview').mouseleave(function(){
   		// console.log('stop');
    	$(this).removeClass('active');
	});
	$slider_next_btn.click(function() {
		$(this).closest('.slider').find('.preview_next').removeClass('active');
	});
	$slider_prev_btn.click(function() {
		$(this).closest('.slider').find(' .preview_prev').removeClass('active');	
	});

	$(window).mouseleave(function(){
		$(' .preview_prev, .preview_next').removeClass('active');
	});
});

$class_to_destroy = '.project_carousel';
$obj_to_destroy = $($class_to_destroy); 
//console.log($obj_to_destroy) ;


//$('.project_carousel.owl-carousel').data('owlCarousel').destroy();  
//$obj_to_destroy.removeClass('owl-carousel'); 



// $(document).ready(owl_destroy_function);
// $(window).on('resize', owl_destroy_function); 
// $bp_mobile = 768;
// var resize_desk_bool = true;
// var resize_mob_bool = true;

// function owl_destroy_function() { 
// 	if ($(window).width() > $bp_mobile) {  
// 		resize_mob_bool = true;
// 		if (resize_desk_bool) {
// 			console.log('desk')

// 		}
// 		resize_desk_bool = false;
		
// 	} else {
// 		resize_desk_bool = true;
// 		if (resize_mob_bool) {
// 			console.log('mob')
// 			$obj_to_destroy.data('owlCarousel').destroy();  
// 			$obj_to_destroy.removeClass('owl-carousel'); 

// 		}
// 		resize_mob_bool = false;
// 	}
// };


// close quickview

// $(document).click(function(event) { 
//     if(!$(event.target).closest('.ui-dialog ').length &&
//        !$(event.target).is('.ui-dialog ')) {
//         if($('.ui-dialog ').is(":visible")) {
//             $('.ui-dialog, .ui-widget-overlay').css('display', 'none');
//         } 
//     }         
// }); 
//  






var bool_scroll = false;

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       bool_scroll = true;
       //console.log('to bottom');
   } else {
      // upscroll code
      bool_scroll = true;
   }
   lastScrollTop = st;
});



var $animation_elements = $('.carousel_section, .about_us_section, .faq_section, .contact_section, .footer_wrapper');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top + 50;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport

    if (bool_scroll) {
    	if ((element_bottom_position >= window_top_position) &&
	      (element_top_position <= window_bottom_position)) {
	      $element.addClass('in_view');

	    } else {
	      //$element.removeClass('in_view');
	    }
    }
	    
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




