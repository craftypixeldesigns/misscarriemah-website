/*
	Designed and created by Carrie Mah
	@missCarrieMah
	
	Website code is available: 
		https://github.com/missCarrieMah/misscarriemah-website
	Code snippets are available: 
		https://codepen.io/collection/nxREop/
 */

$(window).load(function() {
	$('#content-wrapper').click(function() {
		$("#menu-button").prop('checked', false);
	});

	$('nav.menu a.underline').click(function() {
		$("#menu-button").prop('checked', false);
	});

	// Based on code by sking
	// http://jsfiddle.net/k5afwfva/
	var offset = 35;

	$(window).scroll(function() {
	    var position = $(this).scrollTop();
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + position;

	    $('nav.menu a[href^="#"]').each(function() {
			var anchorId = $(this).attr('href'); 
	       	var target = $(anchorId).offset().top - offset;

	        if(position >= target || 
	        	(scrollHeight - ($(window).height() + position)) / scrollHeight === 0) {
	            $('nav.menu a[href^="#"]').removeClass("underline-active");
	            if ($(this).hasClass('underline')) {
		        	$(this).addClass('underline-active');
		        } 
	        }
	        
	    });
	});

});

