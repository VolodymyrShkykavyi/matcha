$(".control-block-button a.friend, ul.friend-requests span a").click(function(ev){
	ev.preventDefault();

	let data = $(this).data();
	let el = this;

	if (data.type && data.id){
		if (data.type == 'remove_friend'){
			if (!confirm('You shoore?')){
				return;
			}
		}

		let send = {type: data.type, targetId: data.id};
		data.type = '';
		this.setAttribute('data-type', '');
			if (send.type == 'add' && data.noimg){
				alert('You haven\'t profile image yet. Pleas upload it, before sending any friend request');
				return;
			}

		$.ajax({
			type: 'POST',
			url: '/friend/change',
			data: send,
			success: function(response){
				console.log(response + "ww");
                if (data.action == 'remove') {
                	Notification(data.id, "acceptRequest");
                    $(el).parent().parent().remove();

                    if ($("ul.friend-requests").children().length <= 1){
                        $("ul.friend-requests li.no-requests").show();
                    }
                    return;
                }
				if (send.type == 'add'){
					el.setAttribute('data-type', 'remove_request');
					data.type = 'remove_request';
					$(el).addClass('bg-orange').removeClass('bg-green');
					Notification(data.id, "addFriend");
				} else if (send.type == 'remove_request' || send.type == 'remove_friend'){
					if($(el).siblings().length){
						Notification(data.id, "friend_del");
						location.reload();
					}
					el.setAttribute('data-type', 'add');
					data.type = 'add';
					$(el).addClass('bg-green').removeClass('bg-orange');
					Notification(data.id, "removeRequest");
				} else if (send.type =='accept'){
					Notification(data.id, "acceptRequest");
					location.reload();
				}
			}
		});

	}
});