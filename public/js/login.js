let errors = 0;
let wrongEmail = 0;
let wrongLogin = 0;

function showError(elem, msg) {
	if ($(elem).next()){
		$(elem).next().css("color", "red");
		if ($(elem).next()[0]){
			$(elem).next()[0].innerText = msg;
		}
	}
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
					$(input).css("border-color", "red");
					wrongEmail = 1;
					showError(input, "Wrong format or email already exists");
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
				showError(input, "Wrong format or login already exists");
			}
		}
	});
}

$("#Register_Now").click(function(ev) {
	ev.preventDefault();
	$("#reg_butt").click();
});

$("#Register_Now_s").click(function(ev) {
	ev.preventDefault();
	$("#reg_butt").click();
});

$("#personal_information_form input[name='email']").keyup(checkEmail);
$("#personal_information_form input[name='login']").keyup(checkLogin);
$("#personal_information_form button[type='submit']").click(function (ev) {
	errors = 0;

	clearErrors();
	let data = {};
	let form = $("#personal_information_form")[0];
	let age = getAge(form.datetimepicker.value);

	if (!age || age < 18) {
		showError(form.datetimepicker, "You are too young.");
		errors++;
	} else {
		data.datetimepicker = form.datetimepicker.value;
	}

	if (!form.email.value.length || form.email.value.length > 150) {
		showError(form.email, "Wrong email length. Max 150 chars");
		errors++;
	} else {
		checkEmail();
		data.email = form.email.value;
	}

	if (!form.login.value || form.login.value.length > 30){
		showError(form.fname, "Wrong length. Max length 30 chars");
		errors++;
	} else {
		checkLogin();
		data.login = form.login.value;
	}

	if (!form.fname.value || form.fname.value.length > 30) {
		showError(form.fname, "Wrong length. Max length 30 chars");
		errors++;
	} else {
		data.fname = form.fname.value;
	}

	if (!form.lname.value || form.lname.value.length > 30) {
		showError(form.lname, "Wrong length. Max length 30 chars");
		errors++;
	} else {
		data.lname = form.lname.value;
	}

	if (errors || wrongEmail || wrongLogin) {
		ev.preventDefault();
	}
});