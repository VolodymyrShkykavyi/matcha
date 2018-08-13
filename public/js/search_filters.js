let sort_by_value = 'rating';
let age_min = $("input[name = 'filter_age_min'")[0];
let age_max = $("input[name = 'filter_age_max'")[0];
let rating_min = $("input[name = 'filter_rating_min'")[0];
let rating_max = $("input[name = 'filter_rating_max'")[0];
let search_list = $("ul.notification-list")[0];

$("[name='sort_by']").change(function (){
	sort_by_value = this.options[this.options.selectedIndex].value;

	//get filters
	//ajax
	// console.log(sort_by_value);
	// console.log(age_min);
	// console.log(age_max);
	// console.log(rating_min);
	// console.log(rating_max);

	getResults();

});


$("#aply_filters").click(function(){
	getResults();
});

function getResults(){
	let data = {};

	if (age_min.value)
		data.age_min = age_min.value;
	if (age_max.value)
		data.age_max = age_max.value;
	if (rating_min.value)
		data.rating_min = rating_min.value;
	if (rating_max.value)
		data.rating_max = rating_max.value;
	$.ajax({
		url: '/search/filter',
		method: 'POST',
		data: data,
		success: function(response){
			response = JSON.parse(response);

			$(search_list).empty();

			for (let el in response){
				$(search_list).append(
					"<li>login: " + response[el].login +
					"<br>age: " + response[el].age + 
					"<br>rating: " + response[el].rating +
					"</li>");
				//console.log(response[el]);
			}
			console.log(response);

		}
	});
	console.log(data);
}

console.log(age_max);