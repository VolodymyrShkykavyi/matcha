$(document).ready(function() {
	console.log($('.Search_people'));
	$(document).keyup(function(e) {
		var keycode = (e.keyCode ? e.keyCode : e.which);
		if ($('.Search_people').is(':focus')) {
			var Value = $('.Search_people').val();
			console.log(Value);
		}
	});
});
