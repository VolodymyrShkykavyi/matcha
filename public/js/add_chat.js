$("a.btn.btn-control.bg-purple").click(function(ev){
	ev.preventDefault();

	let data = $(this).data();

	if (data.id){
		let send = {
			targetId: data.id
		};

		$.ajax({
			type: 'POST',
			url: '/profile/chat',
			data: send,
			success: function(response){
					if(response != "Not friends")
						window.location = "/chat/" + response;
                }
		});

		}
});