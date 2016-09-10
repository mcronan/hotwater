$(document).ready(function() {
	
	$(window).scroll(function() {
		var top = $('.first-container').height();
		var secondTop = $('.first-container').height();
		
		if($(this).scrollTop() > 500) {
			$('.first-container').css("background-image", "none")
			console.log("hello");
		}

		if($(this).scrollTop()> 770) {
			$('.second-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 1050) {
			$('.third-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 1400) {
			$('.fourth-container').css("background-image", "none")
			console.log("hello again");
		}
	})


});