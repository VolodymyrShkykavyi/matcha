function showError(elem, msg)
{
	$(elem).next().css("color", "red");
	$(elem).next()[0].innerText = msg;
}

function clearErrors()
{
	$("span.material-input").html('');
}

function getDateObj(str)
{
	let dateParts = str.split("/");

	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
}

function getAge(pickerStr)
{
	let birthDate = getDateObj(pickerStr);
	let today = new Date();

	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

$("#personal_information_form button").click(function (ev) {
	let data = {};
	let form = $("#personal_information_form")[0];
	let errors = 0;
	let age = getAge(form.datetimepicker.value);

	ev.preventDefault();
	clearErrors();

	data.status = form.status.value;
	data.description = $(form.description)[0].value;
	data.sexual_preferenses = $(form.sex_preferences).val();
	data.lat = $('#lat').text();
	data.lng= $('#lng').text();

	if (form.firstName.value.length > 30){
		showError(form.firstName, "Too long value. Max length 30 chars");
		errors++;
	} else {
		data.firstName = form.firstName.value;
	}

	if (form.lastName.value.length > 30){
		showError(form.lastName, "Too long value. Max length 30 chars");
		errors++;
	} else {
		data.lastName = form.lastName.value;
	}

	if (form.email.value.length > 150){
		showError(form.email, "Too long value. Max length 150 chars");
		errors++;
	} else {
		data.email = form.email.value;
	}

	if (form.custom_status.value.length > 50){
		showError(form.custom_status, "Too long value. Max length 50 chars");
		errors++;
	} else {
		data.custom_status = form.custom_status.value;
	}

	if (age < 18){
		showError(form.datetimepicker, "You are too young.");
		errors++;
	} else {
		data.email = form.email.value;
	}



	console.log(data);
	if (!errors)
		console.log('ok');
});