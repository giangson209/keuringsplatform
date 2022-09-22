
$(document).ready(function(){
	// if($(window).innerWidth() < 768){
	// 	$('.project .row').slick({
	// 		autoplay:false,
	// 		arrow:false,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		infinite: false,
	// 	});

	// }

	// $(window).bind('scroll', function() {
	// 	var navHeight = $( window ).height();
	// 	if ($(window).scrollTop() > 1) {
	// 		$('.head-menu').addClass('fixed-menu');
	// 	}
	// 	else {
	// 		$('.head-menu').removeClass('fixed-menu');
	// 	}
	// });

	$('.title-faq').click(function(e) {
	    e.preventDefault();  
	    $(".title-faq").removeClass('active');
	    
	    var $this = $(this); 
	    if ($this.next().hasClass('active')) {
	        $this.removeClass('active');
	        $('.desc-answer').removeClass('active'); 
	        $this.next().slideUp(350).removeClass('active');
	    } else {
	        $('.desc-answer').slideUp(300).removeClass('active'); 
	        $this.toggleClass('active');
	        $this.addClass('active');
	        $this.next().slideToggle(350).addClass('active');  
	    }
	});

})

