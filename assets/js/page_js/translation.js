table_name = "truck_types";
var form_validator = null;
jQuery(document).ready( function() {
	jQuery("#add_edit_section").hide();
	
	if(jQuery("#add_language_label_form").length) {
        form_validator = jQuery("#add_language_label_form").validate({
            rules: {
                label_name: "required",
            },
            messages: {
                label_name: "Please enter label name",
            }
        });
    }
}).on("click", "#add_language_label", function() {
	jQuery("#label_name").val("");
	jQuery("#language").val(jQuery("#language option:first").val());
	jQuery("#language").trigger("change");
	form_validator.resetForm();
    jQuery("#add_edit_section").slideDown(1000);
}).on("click", "#cancel_language_label", function() {
	jQuery("#label_name").val("");
	jQuery("#language").val(jQuery("#language option:first").val());
	jQuery("#language").trigger("change");
	form_validator.resetForm();
    jQuery("#add_edit_section").slideUp(1000);
}).on("click", "#submit_language_label", function() {
	if(jQuery("#add_language_label_form").valid()) {
		block_body();
		var formData = new FormData();
		formData.append("label_name", jQuery("#label_name").val());
		jQuery.ajax({
            url: base_url + "admin/translation-add",
            method: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
				var res = jQuery.parseJSON(data);
				if(res.status) {
					alert_success(res.message);
					jQuery("#cancel_language_label").trigger("click");
				} else {
					alert_danger(res.message);
				}
            }, complete: function() {
                unblock_body();
            }, error: function(xhr, ajaxOptions, thrownError) {
				unblock_body();
				alert_danger("Problem when add label. Please try again!");
			},
        });
	}
}).on("change", "#language", function() {
	var language_code = jQuery(this).val();
	jQuery("#language_editable_div").empty();
	if(language_code == "") {return false;}
	block_body();
	var formData = new FormData();
    formData.append("language_code", language_code);
	jQuery.ajax({
		url: base_url + "admin/translation-get",
		method: "POST",
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		success: function(data) {
			var res = jQuery.parseJSON(data);
			if(res.status) {
				var language_data = res.language_data;
				jQuery.each( language_data, function( key, value ) {
					var textbox_id = key;
					var textbox_label = textbox_id.replace(/_/g, " ");
					var textbox_value = value;
					var text_right = ((language_code == "ar") ? " text-right": "");
					var append_html = '<div class="col-xl-3 col-md-4 col-sm-6 col-12">'+
										'<fieldset class="form-group">'+
											'<label for="'+textbox_id+'">'+textbox_label+'</label>'+
											'<input type="text" id="'+textbox_id+'" class="form-control language_textbox'+text_right+'" value="'+textbox_value+'" />'+
										'</fieldset>'+
									'</div>';
					jQuery("#language_editable_div").append(append_html);
				});
				var append_html = '<div class="col-sm-12"><button type="button" id="update_laguage_data" class="btn btn-admin-first btn-small">Update</button></div>';
				jQuery("#language_editable_div").append(append_html);
			} else {
				alert_danger(res.message);
			}
		}, complete: function() {
			unblock_body();
		}, error: function(xhr, ajaxOptions, thrownError) {
			unblock_body();
			alert_danger("Problem when fetch language details. Please try again!");
		},
	});
}).on("click", "#update_laguage_data", function() {
	var formData = new FormData();
	var language_code = jQuery("#language").val();
	if(language_code == "") {return false;}
	block_body();
	formData.append("language_code", language_code);
	jQuery(".language_textbox").each(function() {
		var id = jQuery(this).attr("id");
		var id_val = jQuery(this).val();
		formData.append("language_data["+id+"]", id_val);
	});
	jQuery.ajax({
		url: base_url + "admin/translation-update",
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
			alert_danger("Problem when update language data. Please try again!");
		},
	});
});