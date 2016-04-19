$(document).ready(function() {

	// $('#city-type').submit(typeCity);
	$('#submit-btn').click(showCityPicture);

	function showCityPicture() {
		event.preventDefault();

		var city = $('#city-type').val();

		if (city == "New York City" || city == "New York" || city == "NYC") {
			$('body').removeClass();
			$('body').addClass("nyc");
		} else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
			$('body').removeClass();
			$('body').addClass("sf")
		} else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
			$('body').removeClass();
			$('body').addClass("la");
		} else if (city == "Austin" || city == "ATX") {
			$('body').removeClass();
			$('body').addClass("austin");
		} else if (city == "Sydney" || city == "SYD") {
			$('body').removeClass();
			$('body').addClass("sydney");
			//how do i do the default picture for cities not listed??
		} else {
			$('body').removeClass();
			$('body').addClass("citypix");
		}
	}
});


// $('#city-type').submit(inputCity);

// function inputCity() {
// 	event.preventDefault();

// 	$('')
	
// 	city = NYC || SF || LA || ATX || SYD;
// }

// $('#submit-btn').click(showCityPicture);

// 	if (NYC == "New York City" || NYC == "New York" || NYC == "NYC") {
// 		$('#submit-btn').click(backgroundImage url = '../images/nyc.jpg');
// } else {
// 	$('#submit-btn').click(backgroundImage url = '../images/citipix_skyline.jpg');
// }

// 	}
	


// $('#submit-btn').click(showCityPicture);

// function showCityPicture(){
// 	event.preventDefault();

// 	var city = $('#city-type').val();
// 	$('#city-type').html('<td>' + newEntry + '</td>');

// 	if (city-type == "New York City" || city-type == "NYC" || city-type == "New York") {
// 		$('#submit-btn').click
// 		$('body').css.backgroundImage = url('../images/nyc.jpg');
// 	}
// }

// function showNewYorkCity() {
// 	event.preventDefault();
// 	$('newYorkCity').show();
// }

// $('#submit-btn').click(showNewYorkCity);






//goal: upload the correct background picture so the input city matches the picture
//If New York, New York City or NYC is input, then upload the NYC backdrop
//If San Francisco, SF, or Bay Area is input, then upload the SF backdrop
//IF Los Angeles, LA or LAX is input, upload the LA backdrop
//If Austin or ATX is input, upload the Austin backdrop
//If Sydney or SYD is input, upload the Sydney backdrop
//If none of these cities are input, keep the original backdrop
