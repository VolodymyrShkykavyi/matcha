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
