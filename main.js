$(document).ready(function() {
	
	$(window).scroll(function() {
		var top = $('.first-container').height();
		var secondTop = $('.first-container').height();
		
		if($(this).scrollTop() > 550) {
			$('.first-container').css("background-image", "none")
			console.log("hello");
		}

		if($(this).scrollTop()> 850) {
			$('.second-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 1150) {
			$('.third-container').css("background-image", "none")
			console.log("hello again");
		}

		if($(this).scrollTop()> 1500) {
			$('.fourth-container').css("background-image", "none")
			console.log("hello again");
		}
	})


});