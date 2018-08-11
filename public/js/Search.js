$(".loupe").click(function (e){
	e.preventDefault();
	$(".loupe").addClass("none");
	$(".search-bar").removeClass("none");
	$.ajax({
		type: 'POST',
		url: '/search',
		success: function(response){
				let ank = JSON.parse(response);
				console.log(ank);
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
					options: ank,
					render: {
						option: function(a, e) {
							return '<div class="inline-items">' + (a.image ? '<div class="author-thumb"><img src="/img' + e(a.image) + '" alt="avatar"></div>' : "") + '<div class="notification-event">' + (a.name ? '<span class="h6 notification-friend"></a>' + e(a.name) + "</span>" : "") + (a.message ? '<span class="chat-message-item">' + e(a.message) + "</span>" : "") + "</div>" + (a.icon ? '<span class="notification-icon"><svg class="' + e(a.icon) + '"><use xlink:href="icons/icons.svg#' + e(a.icon) + '"></use></svg></span>' : "") + "</div>"
						},
						item: function(a, e) {
							return '<div><span class="label">' + e(a.name) + "</span></div>"
						}
					},
					onItemAdd: function (a, e){
						console.log("111");
						var p_url = "/profile/" + a;
						console.log(p_url);
						window.location = p_url;
					}
				});
			}
		});
});