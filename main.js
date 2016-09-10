$(document).ready(function() {
	
	$(window).scroll(function() {
		var top = $('.first-container').height();
		var secondTop = $('.first-container').height();
		
		// FIRST CONTAINER
		// Make head disappear
		if($(this).scrollTop() > 670 && $(this).scrollTop() < 860) {
			$('.first-container').css("background-image", "none")
			console.log("show");
		}

		// Make head re-appear
		if($(this).scrollTop() < 670 || $(this).scrollTop() > 860) {
			$('.first-container').css("background-image", "url('head-5.png')")
			console.log("show");
		}

		// SECOND CONTAINER
		// Make head disappear
		if($(this).scrollTop()> 860) {
			$('.second-container').css("background-image", "none")
			console.log("hello again");
		}

		// Make head re-appear
		if($(this).scrollTop() < 860 || $(this).scrollTop() > 1250) {
			$('.second-container').css("background-image", "url('head-5.png')")
			console.log("show");
		}

		// THIRD CONTAINER
		// Make head disappear		
		if($(this).scrollTop()> 1250) {
			$('.third-container').css("background-image", "none")
			console.log("hello again");
		}

		// Make head re-appear
		if($(this).scrollTop() < 1250 || $(this).scrollTop() > 1450) {
			$('.third-container').css("background-image", "url('head-5.png')")
			console.log("show");
		}

		// FOURTH CONTAINER
		// Make head disappear
		if($(this).scrollTop()> 1450) {
			$('.fourth-container').css("background-image", "none")
			console.log("hello again");
		}

		// Make head re-appear
		if($(this).scrollTop() < 1450) {
			$('.fourth-container').css("background-image", "url('head-5.png')")
			console.log("show");
		}
	})


});