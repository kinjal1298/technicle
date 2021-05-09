table_name = "site_configuration";
jQuery(document).ready( function() {
}).on("change", "#stripe_status", function(){
	var card_status = jQuery(this).prop("checked");
	if(card_status) {
		jQuery("#card_div").slideDown(500);
	} else {
		jQuery("#card_div").slideUp(500);
	}
}).on("click", "#submit_settings", function(){
	block_body();
	var formData = new FormData();
	formData.append("site_email", jQuery("#site_email").val());
	formData.append("site_phone_no", jQuery("#site_phone_no").val());
	formData.append("site_address", jQuery("#site_address").val());
	formData.append("facebook_url", jQuery("#facebook_url").val());
	formData.append("linkedin_url", jQuery("#linkedin_url").val());
	formData.append("twitter_url", jQuery("#twitter_url").val());
	formData.append("youtube_url", jQuery("#youtube_url").val());
	var stripe_status = jQuery("#stripe_status").prop("checked");
	if(stripe_status) {
		formData.append("stripe_status", "E");
		formData.append("stripe_secretkey", jQuery("#stripe_secretkey").val());
		formData.append("stripe_publishablekey", jQuery("#stripe_publishablekey").val());
	} else {
		formData.append("stripe_status", "D");
	}
	jQuery.ajax({
		url: base_url + "admin/update-site-settings",
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
		}, complete: function() {
			unblock_body();
		}, error: function(xhr, ajaxOptions, thrownError) {
			unblock_body();
			alert_danger("Problem when update site settings. Please try again!");
		},
	});
});