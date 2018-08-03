let errors = 0;
let wrongEmail = 0;
let wrongLogin = 0;

function showError(elem, msg) {
	$(elem).next().css("color", "red");
	$(elem).next()[0].innerText = msg;
}

function clearErrors() {
	$("span.material-input").html('');
}

function getDateObj(str) {
	let dateParts = str.split("/");

	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
}

function getAge(pickerStr) {
	let birthDate = getDateObj(pickerStr);
	let today = new Date();

	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

function checkEmail() {
	let data = {};
	let input = $("#personal_information_form input[name='email']")[0];
	data.email = input.value;
	$.ajax({
		type: 'POST',
		url: '/check/email',
		data: data,
		async: false,
		success: function (response) {
				if (response === 'true') {
					$(input).css("border-color", "green");
					showError(input, "");
					wrongEmail = 0;
				} else if (response === 'false') {
					//already exists
					$(input).css("border-color", "red");
					wrongEmail = 1;
					showError(input, "Email already exists");
				}
			}
	});

}

function checkLogin()
{
	let data = {};
	let input = $("#personal_information_form input[name='login']")[0];
	data.login = input.value;
	$.ajax({
		type: 'POST',
		url: '/check/login',
		data: data,
		async: false,
		success: function (response) {
			if (response === 'true') {
				$(input).css("border-color", "green");
				showError(input, "");
				wrongLogin = 0;
			} else if (response === 'false') {
				//already exists
				$(input).css("border-color", "red");
				wrongLogin = 1;
				showError(input, "Login already exists");
			}
		}
	});
}

$("#personal_information_form input[name='email']").keyup(checkEmail);
$("#personal_information_form input[name='login']").keyup(checkLogin);

$("#personal_information_form button").click(function (ev) {
	let data = {};
	let form = $("#personal_information_form")[0];
	let age = getAge(form.datetimepicker.value);

	ev.preventDefault();
	clearErrors();

	data.description = $(form.description)[0].value;
	data.sexual_preferenses = $(form.sex_preferences).val();
	data.gender = $(form.gender)[0].value;
	data.fb_page = form.fb_page.value;
	data.twitter_page = form.twitter_page.value;

	data.lat = $('#lat').text();
	data.lng = $('#lng').text();

	if (form.firstName.value.length > 30) {
		showError(form.firstName, "Too long value. Max length 30 chars");
		errors++;
	} else {
		data.firstName = form.firstName.value;
	}

	if (form.lastName.value.length > 30) {
		showError(form.lastName, "Too long value. Max length 30 chars");
		errors++;
	} else {
		data.lastName = form.lastName.value;
	}

	if (form.login.value.length > 30){
		showError(form.firstName, "Too long value. Max length 30 chars");
		errors++;
	} else {
		checkLogin();
		data.login = form.login.value;
	}

	if (form.email.value.length > 150) {
		showError(form.email, "Too long value. Max length 150 chars");
		errors++;
	} else {
		checkEmail();
		data.email = form.email.value;
	}

	if (form.custom_status.value.length > 50) {
		showError(form.custom_status, "Too long value. Max length 50 chars");
		errors++;
	} else {
		data.status = form.custom_status.value;
	}

	if (age < 18) {
		showError(form.datetimepicker, "You are too young.");
		errors++;
	} else {
		data.datetimepicker = form.datetimepicker.value;
	}

	if (!errors && !wrongEmail && !wrongLogin) {

		$.ajax({
			type: 'POST',
			url: '/profile/personal/change',
			data: data,
			success: function (response) {
				response = JSON.parse(response);
				if (response){
					alert('changed');
				}
			}
		});
	} else {
		//alert('validation err, del me');
	}
});



//tags

$("#form_add_tag button").click(function(){
	let input = $("#form_add_tag input[name='new_tag'")[0];
	let tag = $.trim(input.value);
	let errors = 0;

	clearErrors();

	if (tag.lastIndexOf('#') > 0){
		showError(input, "# is forbidden inside tags");
		errors++;
	}
	if (tag.length < 3){
		showError(input, "min tag length 3 chars");
		errors++;
	}
	if (tag.length > 20){
		showError(input, 'max tag length 20 chars');
		errors++;
	}

	if (!errors){
		$.ajax({
			type: 'POST',
			url: '/tag/add',
			data: {tag: tag},
			success: function (response) {
				response = JSON.parse(response);
				if (response === 'false'){
					showError(input, 'validation error');
					return;
				}
				if (response.error){
					showError(input, response.error);
					return;
				}
				let new_el = $("<button type=\"button\" onclick=\"delTag(this);\" class=\"ml-1 mr-1 btn btn-secondary\" data-id=\""+ response +"\">" + tag + "</button>");

				$("#tag_list").append(new_el);
			}
		});
	}
});

function delTag(elem) {
    let id = $(elem).data().id;

    if (confirm("You really want to delete this tag ?")) {
        $.ajax({
            type: 'POST',
            url: 'tag/delete',
            data: {id: id},
            success: function (response) {
                response = JSON.parse(response);

                if (response === true){
                    $(elem).remove();
                }
            }
        });

    }
}


$("#tag_list button").click(function () {
	delTag(this);
});