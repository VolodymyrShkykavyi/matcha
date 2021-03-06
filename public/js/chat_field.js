let chat_id = window.location.pathname.split('/');
var count = 1;
var end = 0;

function all_read(room_id){

	let send = {
			room_id: room_id
		};
		$.ajax({
			type: 'POST',
			url: '/chat/read',
			data: send,
			success: function(response)
			{
			}
		})
}

function getCountUnread1(room_id)
{

  let send = {
      room_id: room_id
    };
    $.ajax({
      type: 'POST',
      url: '/chat/getUnread',
      data: send,
      success: function(response)
      {
      	var cur_unr_room = "#count_unread_mess" + room_id;
          $(cur_unr_room).html(response);
      }
    })
}


function chat_field(room_id, start) {
	var el1  = $("#chat-field")[0];
	var el  = $("#input_mess")[0];
	var cur_unr_room = "#count_unread_mess" + room_id;


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
						var unreadMess_notif = $("#unreadMess_notif")[0];
						if(unreadMess_notif)
						{
							unreadMess_notif.innerHTML = unreadMess_notif.innerHTML - $(cur_unr_room).html();
							if(unreadMess_notif.innerHTML < 1)
								unreadMess_notif.classList.add('none');
						}
						all_read(room_id);
						getCountUnread1(room_id);
						$(cur_unr_room).addClass('none');
						$("#chat-field").html(response);
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
	if(chat_id[1] == "chat")
	{
		let send = {
			roomId: chat_id[2],
			start: 0
		};
			$.ajax({
				type: 'POST',
				url: '/profile/chat',
				data: send,
				success: function(response){
					if (response != 'notFriend' && response != 'notRoom')
						chat_field(response, 0);
       	         }
			});
		}
}