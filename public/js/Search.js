
$(".loupe").click(function (e){
	var resp;
	e.preventDefault();
	$(".loupe").addClass("none");
	$(".search-bar").removeClass("none");
	
	function Searching(resp){
		var a = $('.Search_people');
		a.selectize({
			closeAfterSelect: true,
			hideSelected: true,
			persist: !1,
			maxItems: 1,
			maxOptions: 5,
			valueField: "id",
			labelField: "name",
			searchField: ["name"],
			options: resp,
			render: {
				option: function(a, e) {
					return '<div class="inline-items">' + (a.image ? '<div class="author-thumb"><img src="/img' + e(a.image) + '" alt="avatar"></div>' : "") + '<div class="notification-event">' + (a.name ? '<span class="h6 notification-friend"></a>' + e(a.name) + "</span>" : "") + (a.message ? '<span class="chat-message-item">' + e(a.message) + "</span>" : "") + "</div>" + (a.icon ? '<span class="notification-icon"><svg class="' + e(a.icon) + '"><use xlink:href="icons/icons.svg#' + e(a.icon) + '"></use></svg></span>' : "") + "</div>"
				},
				item: function(a, e) {
					return '<div><span class="label">' + e(a.name) + "</span></div>"
				}
			},
			onItemAdd: function (a, e){
				var p_url = "/profile/" + a;
				window.location = p_url;
			},
			load: function(query, callback){
				if (!query.length)
					return callback();
				let send = {
					query: query
				};
				$.ajax({
					type: 'POST',
					url: '/search/load',
					data: send,
					success: function(response){
						resp = JSON.parse(response);
						callback(resp);
					}
				});
			}
		});
	}
	$.ajax({
		type: 'POST',
		url: '/search',
		success: function(response){
				resp = JSON.parse(response);
				Searching(resp);
			}
		});
});