table_name = "admin";
jQuery(document).ready( function() {
	if(jQuery("#my_account").length) {
        jQuery("#my_account").validate({
            rules: {
                full_name: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                full_name: "Please enter full name",
                email: {
                    required: "Please enter email",
                    email: "Please enter proper email",
                },
            }
        });
    }
	if(jQuery("#password_update").length) {
        jQuery("#password_update").validate({
            rules: {
                current_password: "required",
                new_password: {
                    required: true,
                    min: 8,
                },
				confirm_password: {
					required: true,
					equalTo: "#new_password",
				},
            },
            messages: {
                current_password: "Please enter current password",
                new_password: {
                    required: "Please enter new password",
                    min: "Please enter minimum 8 character password",
                },
				confirm_password: {
					required: "Please enter confirm password",
					equalTo: "New password and confirm password does not match",
				},
            }
        });
    }
}).on("change", "#profile_image", function(){
    imagesPreview(this, "image_preview");
}).on("click", "#submit_details", function(){
	if(jQuery("#my_account").valid()) {
		block_body();
		var formData = new FormData();
		formData.append("full_name", jQuery("#full_name").val());
		formData.append("email", jQuery("#email").val());
		var filelength = jQuery("#profile_image").get(0).files.length;
		if(filelength != 0) {
			for (var i = 0; i < filelength; i++) {
				formData.append("image", jQuery("#profile_image").get(0).files[i]);
			}
		}
		jQuery.ajax({
            url: base_url + "admin/update-my-account",
            method: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
				var res = jQuery.parseJSON(data);
				if(res.status) {
					jQuery("#admin_name").text(res.name);
					jQuery("#admin_image").attr("src",res.profile_pic);
					alert_success(res.message);
				} else {
					alert_danger(res.message);
				}
            }, complete: function() {
                unblock_body();
            }, error: function(xhr, ajaxOptions, thrownError) {
				unblock_body();
				alert_danger("Cancelled!", "Problem when update account details. Please try again!", "error");
			},
        });
	}
}).on("click", "#submit_password", function(){
	if(jQuery("#password_update").valid()) {
		block_body();
		var formData = new FormData();
		formData.append("current_password", jQuery("#current_password").val());
		formData.append("new_password", jQuery("#new_password").val());
		formData.append("confirm_password", jQuery("#confirm_password").val());
		jQuery.ajax({
            url: base_url + "admin/update-admin-password",
            method: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
				var res = jQuery.parseJSON(data);
				if(res.status) {
					alert_success(res.message);
				} else {
					alert_danger(res.message);
				}
				jQuery("#current_password").val("");
				jQuery("#new_password").val("");
				jQuery("#confirm_password").val("");
            }, complete: function() {
                unblock_body();
            }, error: function(xhr, ajaxOptions, thrownError) {
				unblock_body();
				alert_danger("Cancelled!", "Problem when update password. Please try again!", "error");
			},
        });
	}
});