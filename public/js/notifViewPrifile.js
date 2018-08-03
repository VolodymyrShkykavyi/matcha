window.onload = function(){
	let profile_id = window.location.pathname.split('/');

	if (profile_id.length == 3){
		var notif_user_id = $("#notif_user_id").html();
		if(profile_id[1] == "profile")
		{
			ViewProfileEvent(notif_user_id, profile_id[2]);
		}
	}
}