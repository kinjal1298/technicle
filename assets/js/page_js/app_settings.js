table_name = "app_settings";
jQuery(document).ready( function() {
}).on("click","#submit_app_settings",function () {
	var bool_val = true;
	jQuery(".app_settings input[type='text']").each(function () {
		var id = jQuery(this).attr("id");
		if(id != "authentication_password") {
			if(jQuery(this).val() != "") {
				jQuery("#"+id+"_error").hide();
				jQuery("#"+id+"_error").empty();
			} else {
				jQuery("#"+id+"_error").text("Version is required!");
				jQuery("#"+id+"_error").show();
				bool_val = false;
			}
		}
	});
	setTimeout(function(){
		if(bool_val) {
			jQuery("#authentication_modal").modal("show");
		}
	}, 500);
}).on("keydown, keyup",".app_settings input[type='text'], .app_settings input[type='password']",function () {
	var id = jQuery(this).attr("id");
	if(jQuery(this).val() != "") {
		jQuery("#"+id+"_error").hide();
		jQuery("#"+id+"_error").empty();
	} else {
		var message = "Version is required!";
		if(id == "authentication_password") {
			message = "Authentication password is required!";
		}
		jQuery("#"+id+"_error").text(message);
		jQuery("#"+id+"_error").show();
	}
}).on("click","#submit_authentication",function () {
	block_body();
	var bool_val = true;
	var formData = new FormData();
	jQuery(".app_settings input[type='text']").each(function () {
		var id = jQuery(this).attr("id");
		if(jQuery(this).val() != "") {
			jQuery("#"+id+"_error").hide();
			jQuery("#"+id+"_error").empty();
			formData.append("key[]", id);
			formData.append(id+"_val", jQuery(this).val());
			if(jQuery("#"+id+"_checkbox").prop("checked")) {
				formData.append(id+"_compulsory", "1");
			}
		} else {
			jQuery("#"+id+"_error").text("Version is required!");
			jQuery("#"+id+"_error").show();
			bool_val = false;
		}
	});
	setTimeout(function(){
		var authentication_password = jQuery("#authentication_password").val();
		if(authentication_password == ""){
			jQuery("#authentication_password_error").text("Authentication password is required!");
			jQuery("#authentication_password_error").show();
			unblock_body();
			bool_val = false;
		} else {
			jQuery("#authentication_password_error").empty();
			jQuery("#authentication_password_error").hide();
		}
		if(bool_val) {
			if(jQuery("#maintenance_mode_checkbox").prop("checked")) {
				formData.append("maintenance_mode_checkbox", "1");
			}
			formData.append("authentication_password", authentication_password);
			jQuery.ajax({
                url: base_url + "admin/update-app-settings",
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
					jQuery("#authentication_modal").modal("hide");
					jQuery("#authentication_password").val("");
                }, complete: function() {
					unblock_body();
                }, error: function(xhr, ajaxOptions, thrownError) {
					unblock_body();
                    alert_danger("Cancelled!", "Problem when update app settings. Please try again!", "error");
                },
            });
		}
	}, 500);
});