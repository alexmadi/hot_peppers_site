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

// end burger animation

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
});



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

// end doc.ready

var $animation_elements = $('.carousel_section, .about_us_section .about_us_part, .faq_section, .contact_section, .footer_wrapper');
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



var bool_owl_initialized = false; 
var slides_count = $('.slider').find('.slide_item').length;

$('.slider.owl-carousel').on('initialized.owl.carousel',function(property){
    var current = property.item.index;
    slider_img_src = $(property.target).find(".owl-item").eq(current).find(".slide_img  img").attr('src');
    var src_cutted = slider_img_src.split('.')[0];
	var matches = src_cutted.match(/\d+$/),
	num_of_curr_img_str;
	if (matches) {
	    num_of_curr_img_str = matches[0];
	}
	$('.slider .owl-prev').append(     
	    '<div class="slide_preview preview_prev">' +							
			'<div class="slide_preview_inner">' +
				'<h2>Project Title #5</h2>' +
				'<p>Printing, Graphic Design</p>' +
			'</div>' +					
			'<img src="img/slide_thumb_5.png"/>' +					
		'</div>'
   );
 	$('.slider .owl-next').append(     
	    '<div class="slide_preview preview_next">' +
	    	'<img src="img/slide_thumb_2.png"/>' +								
			'<div class="slide_preview_inner">' +
				'<h2>Project Title #2</h2>' +
				'<p>Printing, Graphic Design</p>' +
			'</div>' +					
							
		'</div>'
   );
	bool_owl_initialized = true;
});

$('.slider.owl-carousel').on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var prev_slide_title = $(property.target).find(".owl-item").eq(current-1).find('.slide_item_content h2').text();
    var next_slide_title = $(property.target).find(".owl-item").eq(current+1).find('.slide_item_content h2').text();
    var prev_slide_descr = $(property.target).find(".owl-item").eq(current-1).find('.slide_item_content p').text();
    var next_slide_descr = $(property.target).find(".owl-item").eq(current+1).find('.slide_item_content p').text();    
    $(property.target).find('.preview_prev h2').text(prev_slide_title);
    $(property.target).find('.preview_next h2').text(next_slide_title);
    $(property.target).find('.preview_prev p').text(prev_slide_descr);
    $(property.target).find('.preview_next p').text(next_slide_descr);

    if (bool_owl_initialized) {
    	slider_img_src = $(property.target).find(".owl-item").eq(current).find(".slide_img  img").attr('src');
	    var src_cutted = slider_img_src.split('.')[0];
		var matches = src_cutted.match(/\d+$/),
		num_of_curr_img_str;
		if (matches) {
		    num_of_curr_img_str = matches[0];
		}		
		var num_of_curr_img = parseInt(num_of_curr_img_str);
    }     

    var counter_prev = num_of_curr_img;
    var counter_next = num_of_curr_img;

    if (counter_prev == 1) {
    	counter_prev = slides_count+1;
    }
    if (counter_next == slides_count) {
    	counter_next = 0;
    }
    $(property.target).find('.preview_prev img').attr("src","img/slide_thumb_" + (counter_prev-1) + ".png");
    $(property.target).find('.preview_next img').attr("src","img/slide_thumb_" + (counter_next+1) + ".png");
});

