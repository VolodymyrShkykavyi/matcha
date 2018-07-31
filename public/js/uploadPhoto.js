let btnBrowse = $("#btn_browse")[0];
let originalUpload = $("#btn_browse input")[0];
let filename = $("#filename")[0];
let errMsg = $("#error_msg")[0];

btnBrowse.addEventListener('click', function () {
	originalUpload.click();
});

btnBrowse.addEventListener('change', function () {
	filename.value = originalUpload.files[0].name;
	if (!errMsg.classList.contains('d-none')) {
		errMsg.classList.add('d-none');
	}
});

if (document.getElementById('btn_upload')) {
	document.getElementById('btn_upload').addEventListener('click', function (ev) {
		if (!filename.value) {
			ev.preventDefault();
			errMsg.innerText = "Select image to upload";
			errMsg.classList.remove('d-none');
		}
		else {
			if (!errMsg.classList.contains('d-none')) {
				errMsg.classList.add('d-none');
			}
			ev.preventDefault();

			let data = new FormData();
			data.append('image', originalUpload.files[0]);
			$.ajax({
				type: 'POST',
				url: '/photo/upload',
				processData: false,
					contentType: false,
				data: data,
				success: function(response){
					response = JSON.parse(response);
					if (response.src){
						let row = $("#photos_row")[0];

						$(row).append(
							'<div class="col-6 col-md-3 photo">' +
				 			'<div class="d-block position-relative">'+
                    		'<div class="img-thumbnail" style="background-color: transparent;">'+
                        	'<img src="'+ response.src +'" class=" img-fluid w-100"/>'+
                    		'</div>'+
                    		'<div class="overlay rounded">'+
                        	'<button data-id="'+ response.id +'" type="button" onclick="delPhoto(this);"  class="btn btn-danger rounded-circle btn-del-img shadow-none">'+
                            '<i class="fa fa-trash fa-lg text-light"></i>'+
                        	'</button>'+
                    		'</div>'+
                			'</div>'+
							'</div>');

					}
				}
			});
		}
	});
}

//delete photo

function delPhoto(btn)
{
	let imgId = $(btn).data().id;
	let elem = $(btn).closest("div.photo")[0];

	if (confirm('Do you really want to delete this photo?')){
		$.ajax({
			type: 'POST',
			url: '/photo/delete',
			data: {id: imgId},
			success: function(response){
				response = JSON.parse(response);
				if (response){
					elem.remove();
				} else {
					alert('Something going wrong. Please try again later');
				}
			}
		});
	}
}

$("div.photo div.overlay button").click(function(){
	delPhoto(this);
});