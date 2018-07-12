function geo_error(){
	$.ajax('http://ip-api.com/json')
	.then(
    	function success(response) {
    		let data = {lat: response.lat, lng: response.lon};

    		$.ajax({
				type: 'POST',
				url: '/location/change',
				data: (data),
			});
    	}
	);
}

// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {
	geo_error();
}



navigator.geolocation.getCurrentPosition(function(position) {

	// Get the coordinates of the current possition.
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	$('.latitude').text(lat.toFixed(3));
	$('.longitude').text(lng.toFixed(3));
	$('.coordinates').addClass('visible');


	console.log(position);
	let data = {lat: lat.toFixed(3), lng: lng.toFixed(3)};
	$.ajax({
		type: 'POST',
		url: '/location/change',
		data: (data)
	});

}, geo_error);