var socket;

window.onload = function(){
	let profile_id = window.location.pathname.split('/');
	var id_el = $($("#site-header a div.author-title")[0]).data().id;
	var notif_user_id = $("#notif_user_id").html();

	var url = "ws://localhost:7777/?id=" + id_el;
	socket = new WebSocket(url);

	socket.onopen = function(event) {
		var isActive = 1;
		var notif_user_id = $("#notif_user_id").html();
		let ident = {
			user_id: notif_user_id,
			type: "ident"
		};
		socket.send(JSON.stringify(ident));

		function vis(){
			var notif_user_id = $("#notif_user_id").html();
			isActive = 0;
			let send = {
				conn_id: $("#conn_id").html(),
				user_id: notif_user_id,
				type: "c_Active",
				is_active: isActive
			};
			socket.send(JSON.stringify(send));
		}
		function unvis(event){
			var notif_user_id = $("#notif_user_id").html();
			isActive = 1;
			let send = {
				conn_id: $("#conn_id").html(),
				user_id: notif_user_id,
				type: "c_Active",
				is_active: isActive
			};
			socket.send(JSON.stringify(send));
		}
		Visibility.change(function (e, state) {
			if(Visibility.hidden() == 1)
				vis();
			else
				unvis();
		});
		function ViewProfileEvent(user_id, view_id)
		{
			let send1 = {
				from_id: user_id,
				type: "ViewProfileEvent",
				target_id: view_id,
			};
			socket.send(JSON.stringify(send1));
		}
		if (profile_id.length == 3){
			var notif_user_id = $("#notif_user_id").html();
			if(profile_id[1] == "profile")
			{
				ViewProfileEvent(notif_user_id, profile_id[2]);
			}
		}
	};

	function getCountUnread(room_id) 
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
	socket.onmessage = function(event) {
		let message = JSON.parse(event.data);
		if(message['type'] == "ident")
		{
			$("#conn_id").html(message['conn_id']);
		}

		if(message['type'] == "mess_send" || message['type'] == "mess_res")
		{
			if(message['type'] == "mess_res" && $("#curr_chat").html() != message['id_room'])
			{
				var unreadMess_notif = $("#unreadMess_notif")[0];
				if(unreadMess_notif)
				{
					unreadMess_notif.innerHTML = message['all_unread'];
					unreadMess_notif.classList.remove('none');
				}
				var unreadMess_notif_mob = $("#unreadMess_notif_mob")[0];
				if(unreadMess_notif_mob)
				{
					unreadMess_notif_mob.innerHTML = message['all_unread'];
					unreadMess_notif_mob.classList.remove('none');
				}
			}
			$("#his_em").css( "display", "none" );
			if(message['type'] == "mess_send")
			{
				$("#chat_mess_ul:last-child").append('<li><div class="author-thumb"><img src="/img' + message['img'] + '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="#" class="h6 notification-friend">' + message['login'] + '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' + message['date_creation'] + '</time></span><br/><span class="chat-message-item" >' + message['msg'] + '</span></div></li>');
				var scroll = $("#scroll")[0];
				if(scroll)
					scroll.scrollTop = scroll.scrollHeight;
			}
			if(message['type'] == "mess_res")
			{
				$("#last_mess_date").html(message['date_creation']);
				if(message['msg'].length > 50)
					$("#last_mess" + message['id_room']).html(message['msg'].substr(0, 50) + "...");
				else
					$("#last_mess" + message['id_room']).html(message['msg']);
			}
			if($("#curr_chat").html() == message['id_room'] && message['is_active'] == 1 && message['type'] != "mess_send")
			{
				$("#chat_mess_ul:last-child").append('<li><div class="author-thumb"><img src="/img' + message['img'] + '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="#" class="h6 notification-friend">' + message['login'] + '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' + message['date_creation'] + '</time></span><br/><span class="chat-message-item" >' + message['msg'] + '</span></div></li>');
				var scroll = $("#scroll")[0];
					if(scroll)
							scroll.scrollTop = scroll.scrollHeight;
						all_read(message['id_room']);
			}
			else
			{
				if(message['type'] == "mess_res")
				{
					var win = new Audio('/audio/notify.mp3');
					win.play();
       				var cur_unr_room = "#count_unread_mess" + message['id_room'];
					var count_unread =  $(cur_unr_room)[0];
					if(count_unread)
						count_unread.classList.remove('none');
					if(message['is_active'] == 1 && $("#curr_chat").html() == message['id_room'])
						all_read(message['id_room']);
				}
			}
			getCountUnread(message['id_room']);
		}



		if(message['type'] == "addFriend")
		{
			var fr_req = $("#friend_req")[0];
			if(fr_req)
			{
				fr_req.innerHTML = message['req'];
				fr_req.classList.remove('none');
			}
			var friend_req_mob = $("#friend_req_mob")[0];
			if(fr_req)
			{
				friend_req_mob.innerHTML = message['req'];
				friend_req_mob.classList.remove('none');
			}
			var win1 = new Audio('/audio/notify1.mp3');
			win1.play();
		}

		if(message['type'] == "removeRequest")
		{
			var fr_req = $("#friend_req")[0];
			if(fr_req)
			{
				fr_req.innerHTML = message['req'];
				if(message['req'] < 1)
					fr_req.classList.add('none');
			}

			var friend_req_mob = $("#friend_req_mob")[0];
			if(friend_req_mob)
			{
				friend_req_mob.innerHTML = message['req'];
				if(message['req'] < 1)
					friend_req_mob.classList.add('none');
			}

		}
		if(message['type'] == "ViewProfileEvent" )
		{
			var notif_num = $("#notif_num")[0];
			if(notif_num)
			{

				$("#notif_num").html(message['countNotif']);
				notif_num.classList.remove('none');
				var win2 = new Audio('/audio/notify2.mp3');
				win2.play();
			}
			var notif_num_mob = $("#notif_num_mob")[0];
			if(notif_num_mob)
			{

				$("#notif_num_mob").html(message['countNotif']);
				notif_num_mob.classList.remove('none');
				var win2 = new Audio('/audio/notify2.mp3');
				win2.play();
			}
		}
		if(message['type'] == "friend_del" || message['type'] == "acceptRequest")
		{
			var notif_num = $("#notif_num")[0];
			if(notif_num)
			{

				$("#notif_num").html(message['countNotif']);
				notif_num.classList.remove('none');
				var win2 = new Audio('/audio/notify2.mp3');
				win2.play();
			}
			var notif_num_mob = $("#notif_num_mob")[0];
			if(notif_num_mob)
			{
				$("#notif_num_mob").html(message['countNotif']);
				notif_num_mob.classList.remove('none');
				var win2 = new Audio('/audio/notify2.mp3');
				win2.play();
			}
		}
	};

	var mess_form = $("form[name='messages']")[0];
	if(mess_form)
	{
		mess_form.onsubmit = function(ev){
			ev.preventDefault();
			let message = {
				msg: this.mess.value,
				id_room: this.id_room.value,
				type: "private_mess",
			}
			this.mess.value = this.mess.value.trim();
			if(this.mess.value != ""){
				socket.send(JSON.stringify(message));
			}
			this.mess.value = "";
		};
	}
}

function Notification(target_id, type)
{
	var notif_user_id = $("#notif_user_id").html();
	let send = {
		target_id: target_id,
		from_id: notif_user_id,
		type: type,
	};
	socket.send(JSON.stringify(send));
}

$(document).keypress(function(e) {
	var keycode = (e.keyCode ? e.keyCode : e.which);
	if (keycode == '13' && $('#textarea').is(':focus')) {
		e.preventDefault();
		$('#butt').click();
	}
});

