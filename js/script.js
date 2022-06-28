$(function() {
    var win_w = $(document).width();
    var win_h = $(window).height();

		if($(".main-slider .slide").length>0) {
		  $('.main-slider .slider').bxSlider({
		  });
		}
		if($(".main-slider2 .slide").length>0) {
		  $('.main-slider2 .slider').bxSlider({
		  });
		}
	$("#hamburger-icon").on("click", function() {
		$("body").toggleClass("active_m");
		$(".mobile-menu-toggle").slideToggle();
	});
	$(".listing-news .b-news").on("click", function() {
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});
	
    if ($('.phone_mask').length) {
        $(".phone_mask").mask("+7 (999) 999-9999");
    }
    if ($('input[type=checkbox]').length) {
        $("input[type=checkbox]").not(".skip_these").uniform();
    }
    if ($('input[type=radio]').length) {
        $("input[type=radio]").not(".skip_these").uniform();
    } 
	
});



