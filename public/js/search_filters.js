let sort_by_value = 'rating';
let age_min = $("input[name = 'filter_age_min'")[0];
let age_max = $("input[name = 'filter_age_max'")[0];
let rating_min = $("input[name = 'filter_rating_min'")[0];
let rating_max = $("input[name = 'filter_rating_max'")[0];
let search_list = $("ul.notification-list")[0];
let tag_list = $("#tag_list")[0];
let filter_location = $("input[name = 'filter_location']")[0];
let tags = [];
let max_num = 20;

$("[name='sort_by']").change(function (){
	sort_by_value = this.options[this.options.selectedIndex].value;
});


$("#aply_filters, #aply_filters_2").click(function(){
	max_num = 20;
	getResults();
});

$("#filter_add_tag").click(function(){
	let tag = $.trim($("input[name = 'filter_tag']")[0].value);

	if (tag && tag[0] == '#'){
		tag = tag.substr(1);
	}
	if (tag && !tags.includes(tag) && tag.length <= 20 && tag.length >= 3){
		tags.push(tag);
		$("input[name = 'filter_tag']")[0].value = '';
		let new_el = $("<button type=\"button\" onclick=\"delTag(this);\" class=\"ml-1 mr-1 btn btn-secondary\">#" + tag + "</button>");
		$(tag_list).append(new_el);
	}
});

$(document).ready(function(){
	getResults();
});

function delTag(el){
	let index = tags.indexOf(el.innerText.substr(1));

	if (index > -1) {
	  tags.splice(index, 1);
	  	$(el).remove();
	}
}

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
	if (tags.length > 0)
		data.tags = tags;
	if (filter_location.value)
		data.location = filter_location.value;

	data.sort = sort_by_value;
	data.max_num = max_num;

	$.ajax({
		url: '/search/filter',
		method: 'POST',
		data: data,
		success: function(response){
			response = JSON.parse(response);
			$(search_list).empty();

			let no_more = response.more;
			delete response.more;
			if (no_more){
				$('#btn_more').hide();
			} else {
				$('#btn_more').show();
			}

			for (let el in response){

				let new_el = "<li>login: " + response[el].login +
					"<br>age: " + response[el].age + 
					"<br>rating: " + response[el].rating;
				if (response[el].num_shared_tags){
					new_el += "<br>number of shared tags:" + response[el].num_shared_tags;	
				}
				new_el += "</li>";
				$(search_list).append(new_el);

			}
			$("#Search_res").html(" ");
			for (let user in response)
			{
				if(response[user].admin)
					adm = '<li><a href="#" data-type="block" data-id="' + response[user].id + '">Block Profile</a></li>';
				else
					adm = '<li><a href="#" data-type="report" data-id="' +  response[user].id + '">Report Profile</a></li>';

				if(response[user].status)
					cast_status  = '<div class="country">' + response[user].status + '</div>'; 
				else
					cast_status = "";
				let res = '<div class="col-6 profile">' + 
					'<div class="ui-block" data-mh="friend-groups-item"><div class="friend-item friend-groups"><div class="friend-item-content"><div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>	</svg><ul class="more-dropdown">' + adm + '</ul></div><div class="friend-avatar"><div class="author-thumb"><img src="/img/' + response[user].img + '"></div><div class="author-content"><a href="/profile/' +  response[user].id + '" class="h5 author-name">' + response[user].login + '</a>' + cast_status + '<div class="country">age: ' + response[user].age + '</div><div class="country">rating: ' + response[user].rating + '<i class="fa fa-star" style="color: #f5c310;"></i></div></div></div>	<div class="control-block-button"><a  onclick="add_friend(this);" data-type="add" data-id="' +  response[user].id + '" title="Send request" href="#" class="btn btn-control bg-green friend" data-toggle="modal"><svg class="olymp-happy-faces-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use>	</svg></a></div></div></div></div></div>';
				
				$("#Search_res").html($("#Search_res").html() + res);
			}
		}
	});
}

function add_friend(el){
	let data = $(el).data();

	if (data.id){
		let send = {type: 'add', targetId: data.id};
	
		$.ajax({
			type: 'POST',
			url: '/friend/change',
			data: send,
			success: function(response){
				if (response === 'true'){
					$(el).closest("div.profile").remove();
					Notification(data.id, "addFriend");
					getResults();
				}
				
			}
		});
	}
}

$('#btn_more').click(function(){
	max_num += 20;
	getResults();
});