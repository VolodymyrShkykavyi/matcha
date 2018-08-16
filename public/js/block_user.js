$("ul.profile-menu ul.more-dropdown li a, .ui-block ul.notification-list li button, div.friend-item ul.more-dropdown li a").click(function(ev){
	ev.preventDefault();

	let type = $(this).data().type;
	let id = $(this).data().id;
	let block = 0;
	let elem = this;

	if (type == 'block'){
		block = 1;
	}
	console.log(id);
	$.ajax({
		type: 'POST',
		url: '/profile/block',
		data: {id: id, block: block},
		success: function (response){
			if (response === 'false'){
				alert('Something going wrong. Please try again later')
			} else {
				if (type == 'report'){
					alert('reported');
				}
				if ($(".ui-block ul.notification-list").length)
					$(elem).closest("li").remove();
			}
		}
	});

});