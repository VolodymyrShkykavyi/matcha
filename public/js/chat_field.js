let chat_id = window.location.pathname.split('/');
var count = 1;
var end = 0;


function chat_field(room_id, start) {
	var el1  = $("#chat-field")[0];
	var el  = $("#input_mess")[0];


	if(el1){
		let send = {
			room_id: room_id,
			start: start
		};
		$.ajax({
			type: 'POST',
			url: '/chat/mess',
			data: send,
			success: function(response){
				if(response == "END")
				{
					end = 1;
					count = 0;
				}
				if(response != "END")
				{
					if(start < 2)
					{
						el1.innerHTML = response;
						el.classList.remove('none');
						var mess_rumm = $("#mess_rumm")[0];
						mess_rumm.setAttribute('value', room_id);
						$("#curr_chat").html(room_id);
						var scroll = $("#scroll")[0];
						if(scroll)
						{
  							scroll.scrollTop = scroll.scrollHeight;
						}
						count = 1;
						end = 0;
					}
					else
					{
						$("#chat_mess_ul").prepend(response);
					}
					if(scroll && count != 0)
					{
						scroll.onscroll = function() {
							if(scroll.scrollTop  < 1 && end == 0)
							{
								if(response != "")
								{
									count = count + 20;
									var elmnt = document.getElementById("chat_mess_ul").firstChild.id;
									chat_field($("#curr_chat").html(), count);
									if(end != 1)
									{
										var target = document.getElementById(elmnt);
										target.firstChild.scrollIntoView(true);
									}
								}
							}
						}
					}
				}
			}
		})
	}
};

if (chat_id.length == 3){
	let send = {
		targetId: chat_id[2],
		start: 0
	};
		$.ajax({
			type: 'POST',
			url: '/profile/chat',
			data: send,
			success: function(response){
				if (response !== 'errorochka')
					chat_field(response, 0);
                }
		});
}