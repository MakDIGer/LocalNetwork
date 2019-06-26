$(function() {

	// Custom JS

});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    	responsive : {
	    		1 : { items : 1  },
	            767 : { items : 3  }, // from zero to 480 screen width 4 items
	            991 : { items : 4  }, // from 480 screen widthto 768 6 items
	            1199 : { items : 5}  // from 768 screen width to 1024 8 items
	}
});