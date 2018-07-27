let chat_id = window.location.pathname.split('/');


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
				if(response != "")
				{
					el1.innerHTML = response;
					el.classList.remove('none');
					var mess_rumm = $("#mess_rumm")[0];
					mess_rumm.setAttribute('value', room_id);
					$("#curr_chat").html(room_id);
					var scroll = $("#scroll")[0];
					if(scroll)
  						scroll.scrollTop = scroll.scrollHeight;
  					document.body.scrollTop = document.body.scrollHeight;
  				}
			}
		})
	}

};

if (chat_id.length == 3){
	let send = {targetId: chat_id[2]};
		$.ajax({
			type: 'POST',
			url: '/profile/chat',
			data: send,
			success: function(response){
				if (response !== 'errorochka')
					chat_field(response);
                }
		});

}