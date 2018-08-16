function init_edit_Map() {
	let latitude = parseFloat($('#lat').text());
	let longitude = parseFloat($('#lng').text());

	let uluru = {lat: latitude, lng: longitude};
	if (!document.getElementById('map_edit')){return};
	let map = new google.maps.Map(document.getElementById('map_edit'), {
		zoom: 12,
		center: uluru,
		zoomControl: true,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true
	});

	let marker = new google.maps.Marker({
		position: uluru,
		map: map,
		draggable:true,
		title:"Drag me!"
	});

	google.maps.event.addListener(marker, 'dragend', function (event) {
		document.getElementById("lat").innerText = event.latLng.lat();
		document.getElementById("lng").innerText = event.latLng.lng();
	});
}

function init_Map(){
	let latitude = parseFloat($('#lat').text());
	let longitude = parseFloat($('#lng').text());

	let uluru = {lat: latitude, lng: longitude};
	if (!document.getElementById('map_edit')){return};
	let map = new google.maps.Map(document.getElementById('map_edit'), {
		zoom: 11,
		center: uluru,
		zoomControl: true,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true
	});

	// let marker = new google.maps.Marker({
	// 	position: uluru,
	// 	map: map,
	// 	draggable:false,
	// 	title:"Drag me!"
	// });

	// Add circle overlay and bind to marker
	var circle = new google.maps.Circle({
	  map: map,
	  center: uluru,
	  radius: 1500,
	  strokeWeight: 0,
	  fillColor: '#AA0000'
	});
	// circle.bindTo('center', marker, 'position');

	// google.maps.event.addListener(marker, 'dragend', function (event) {
	// 	document.getElementById("lat").innerText = event.latLng.lat();
	// 	document.getElementById("lng").innerText = event.latLng.lng();
	// });
}

function user_map() {

	let markers = [];
	let map = new google.maps.Map(document.getElementById('map_edit'), {
		zoom: 1,
		center: {lat: 1, lng: 2},
		zoomControl: true,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true
	});
	let bounds = new google.maps.LatLngBounds();
	
	$.ajax({
		url: '/users/location',
		type: 'POST',
		success: function (response){
			response = JSON.parse(response);

			for (let pos in response){
				markers.push(new google.maps.Marker({
					position: {lat: parseFloat(response[pos].lat), lng: parseFloat(response[pos].lng)},
					map: map,
					draggable: false
				}));
				
				for(i=0;i<markers.length;i++) {
				   bounds.extend(markers[i].getPosition());
				}
				map.setCenter(bounds.getCenter());
				map.fitBounds(bounds);
				map.setZoom(map.getZoom()-1); 

				if(map.getZoom()> 15){
				  map.setZoom(15);
				}
			}
		}
	});

	// let uluru = {lat: latitude, lng: longitude};
	// if (!document.getElementById('map_edit')){return};
	// let map = new google.maps.Map(document.getElementById('map_edit'), {
	// 	zoom: 5,
	// 	center: uluru,
	// 	zoomControl: true,
	// 	scaleControl: false,
	// 	scrollwheel: false,
	// 	disableDoubleClickZoom: true
	// });


	// let marker = new google.maps.Marker({
	// 	position: uluru,
	// 	map: map,
	// 	draggable:true,
	// 	title:"Drag me!"
	// });

	// google.maps.event.addListener(marker, 'dragend', function (event) {
	// 	document.getElementById("lat").innerText = event.latLng.lat();
	// 	document.getElementById("lng").innerText = event.latLng.lng();
	// });
}