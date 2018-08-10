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
				var Value = $('.Search_people').val();
				console.log(Value);
				var a = $('.Search_people');
				a.selectize({
					persist: !1,
					maxItems: 1,
					valueField: "name",
					labelField: "name",
					searchField: ["name"],
					options: ank,
					render: {
						option: function(a, e) {
							return '<div class="inline-items">' + (a.image ? '<div class="author-thumb"><img src="img' + e(a.image) + '" alt="avatar"></div>' : "") + '<div class="notification-event">' + (a.name ? '<span class="h6 notification-friend"></a>' + e(a.name) + "</span>" : "") + (a.message ? '<span class="chat-message-item">' + e(a.message) + "</span>" : "") + "</div>" + (a.icon ? '<span class="notification-icon"><svg class="' + e(a.icon) + '"><use xlink:href="icons/icons.svg#' + e(a.icon) + '"></use></svg></span>' : "") + "</div>"
						},
						item: function(a, e) {
							return '<div><span class="label">' + e(a.name) + "</span></div>"
						}
					}
				})
			}
		});
});