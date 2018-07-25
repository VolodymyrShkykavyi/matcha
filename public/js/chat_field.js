function chat_field(room_id) {
	var el1  = $("#chat-field")[0];
	var el  = $("#input_mess")[0];

	if(el1){
		let send = {room_id: room_id};
		$.ajax({
			type: 'POST',
			url: '/chat/mess',
			data: send,
			success: function(response){
				// console.log(response);
				el1.innerHTML = response;
				el.classList.remove('none');
				var mess_rumm = document.getElementById("mess_rumm");
				mess_rumm.setAttribute('value', room_id);
				var scroll = document.getElementById("scroll");
  				scroll.scrollTop = scroll.scrollHeight;
  				document.body.scrollTop = document.body.scrollHeight;
			}
		})
	}

};