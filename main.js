$(document).ready(function() {
	
	$(window).scroll(function() {
		var top = $('.first-container').height();
		var secondTop = $('.first-container').height();
		
		if($(this).scrollTop() > 450) {
			$('.first-container').css("background-image", "none")
			console.log("hello");
		}

		if($(this).scrollTop()> 700) {
			$('.second-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 950) {
			$('.third-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 1200) {
			$('.fourth-container').css("background-image", "none")
			console.log("hello again");
		}
	})


});