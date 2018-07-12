
$(".control-block-button a.friend").click(function(ev){
	ev.preventDefault();

	let data = $(this).data();
	let el = this;

	if (data.type && data.id){
		let send = {type: data.type, targetId: data.id};
		data.type = '';
		this.setAttribute('data-type', '');

		$.ajax({
			type: 'POST',
			url: '/friend/change',
			data: send,
			success: function(response){
				if (send.type == 'add'){
					el.setAttribute('data-type', 'remove_request');
					data.type = 'remove_request';
					$(el).addClass('bg-orange').removeClass('bg-green');
				} else if (send.type == 'remove_request' || send.type == 'remove_friend'){
					if($(el).siblings().length){
						location.reload();
					}
					el.setAttribute('data-type', 'add');
					data.type = 'add';
					$(el).addClass('bg-green').removeClass('bg-orange');
				} else if (send.type =='accept'){
					location.reload();
				}
			}
		});

	}
});