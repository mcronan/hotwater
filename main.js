$(document).ready(function() {
	
	$(window).scroll(function() {
		var Top = $('.first-container').height();
		if($(this).scrollTop()>Top) {
			$('.first-container').css("background-image", "none")
			console.log("hello");
		}
	})


});