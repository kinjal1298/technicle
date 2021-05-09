jQuery(document).ready( function() {
	alert_fadeto();
	if(jQuery("#admin_login").length) {
		jQuery("#admin_login").validate({
			rules: {
				admin_email: {
					required: true,
					email: true,
				},
				admin_password: {
					required: true,
				},
			}, messages: {
				admin_email: {
					required: "Please enter email",
					email: "Please enter a valid email",
				},
				admin_password: {
					required: "Please enter password",
				},
			},
		});
	}
});

function alert_fadeto() {
	if(jQuery(".alert-success").is(":visible")){
        jQuery(".alert-success").fadeTo(4000, 1000).slideUp(1000, function(){});
    }
	if(jQuery(".alert-danger").is(":visible")){
        jQuery(".alert-danger").fadeTo(4000, 1000).slideUp(1000, function(){});
    }
}

jQuery(document).on("click","#admin_login_submit1",function () {
	if(jQuery("#admin_login").valid()) {
		jQuery("#unlock_i").removeClass("ft-unlock");
		jQuery("#unlock_i").addClass("ft-refresh-cw icon-spin");
		var formData = new FormData();
		formData.append("admin_email", jQuery("#admin_email").val());
		formData.append("admin_password", jQuery("#admin_password").val());
		jQuery.ajax({
			url: base_url + "admin/login",
			method: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data) {
				var res = jQuery.parseJSON(data);
				if(res.status) {
					window.location.href = base_url + "admin/dashboard";
				} else {
					jQuery(".error_message").text(res.message);
					jQuery(".alert-danger").show();
					jQuery("#unlock_i").removeClass("ft-refresh-cw icon-spin");
					jQuery("#unlock_i").addClass("ft-unlock");
					alert_fadeto();
				}
			},
			complete: function() { },
			error: function (xhr, ajaxOptions, thrownError) {
				jQuery(".error_message").text("Problem when login. Please try again!");
				jQuery(".alert-danger").show();
				jQuery("#unlock_i").removeClass("ft-refresh-cw icon-spin");
				jQuery("#unlock_i").addClass("ft-unlock");
				alert_fadeto();
			},
		});
	}
});