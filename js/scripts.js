$(document).ready(function() {

	// $('#city-type').submit(typeCity);
	$('#submit-btn').click(showCityPicture);
//goal: upload the correct background picture so the input city matches the picture
	function showCityPicture() {
		event.preventDefault();

		var city = $.trim($('#city-type').val().toUpperCase());

//If New York, New York City or NYC is input, then upload the NYC backdrop
		if (city == "NEW YORK CITY" || city == "NEW YORK" || city == "NYC") {
			$('body').removeClass();
			$('body').addClass("nyc");
//If San Francisco, SF, or Bay Area is input, then upload the SF backdrop			
		} else if (city == "SAN FRANCISCO" || city == "SF" || city == "BAY AREA") {
			$('body').removeClass();
			$('body').addClass("sf");
//IF Los Angeles, LA or LAX is input, upload the LA backdrop
		} else if (city == "LOS ANGELES" || city == "LA" || city == "LAX") {
			$('body').removeClass();
			$('body').addClass("la");
//If Austin or ATX is input, upload the Austin backdrop
		} else if (city == "AUSTIN" || city == "ATX") {
			$('body').removeClass();
			$('body').addClass("austin");
//If Sydney or SYD is input, upload the Sydney backdrop
		} else if (city == "SYDNEY" || city == "SYD") {
			$('body').removeClass();
			$('body').addClass("sydney");
//If none of these cities are input, keep the original backdrop
		} else {
			$('body').removeClass();
			$('body').addClass("citypix");
		}
	}
});



