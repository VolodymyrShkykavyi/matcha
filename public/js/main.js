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


//show menu content
$('#accordion a.clickable').click(function(e){
	e.preventDefault();
	let id = $(this).prop('id');

	$(".settings .ui-block").hide();
	$(".settings .ui-block." + id).show();
});

//change password
$("#form_change_password button").click(function(){
	let data = $("#form_change_password").serializeArray().reduce(function(obj, item) {
    	obj[item.name] = item.value;
   		return obj;
	}, {});

	if (data.new_psw !== data.confirm){
		alert('don\'t match');
		return false;
	}
	if (data.new_psw.length < 6){
		alert('too small');
		return false;
	}

	if (!data.new_psw.match(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/g)){
		alert('numbers and letters');
		return false;
	}

	$.ajax({
		type: 'POST',
		url: '/password/change',
		data: (data),
		success: function (result) {
			if (result == 'true'){
				alert('psw changed');
			} else {
				alert('smt wrong');
			}
		}
	});
});