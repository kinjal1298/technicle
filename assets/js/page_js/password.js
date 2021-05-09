jQuery(document).ready( function() {
	if(jQuery("#user_password").length) {
		jQuery("#user_password").validate({
			rules: {
				new_password: {
					required: true,
					min: 8,
				},
				confirm_password: {
					required: true,
					equalTo: "#new_password",
				},
			}, messages: {
				new_password: {
					required: "Please enter new password",
                    min: "Please enter minimum 8 character password",
				},
				confirm_password: {
					required: "Please enter confirm password",
					equalTo: "New password and confirm password does not match",
				},
			},
		});
	}
}).on("click", "#user_password_submit", function(){
	if(jQuery("#user_password").valid()) {
		jQuery("#unlock_i").removeClass("ft-unlock");
		jQuery("#unlock_i").addClass("ft-refresh-cw icon-spin");
		var formData = new FormData();
		formData.append("id", jQuery("#user_id").val());
		formData.append("new_password", jQuery("#new_password").val());
		jQuery.ajax({
			url: base_url + "set-user-password",
			method: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				var res = jQuery.parseJSON(data);
				window.location.href = base_url + "thank-you";
			},
			complete: function() { },
			error: function (xhr, ajaxOptions, thrownError) {
				jQuery("#unlock_i").removeClass("ft-refresh-cw icon-spin");
				jQuery("#unlock_i").addClass("ft-unlock");
			},
		});
	}
});
