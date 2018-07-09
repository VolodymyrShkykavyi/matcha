function change_status($el) {
	let form = $el.parentElement;
	let data = {status: form.status.value};

	$.ajax({
		type: 'POST',
		url: '/status/change',
		data: (data),
		success: function (result) {
			if (result == 'true'){
				$('.author-page .author-subtitle').each(function () {
					this.innerText = data.status;
				});
			}
		}
	});
}
