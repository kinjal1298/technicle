var todayDate = moment().startOf("day");
var TODAY = todayDate.format("YYYY-MM-DD");
var table_var = null;
var table_name = null;
jQuery(document).ready( function() {
	alert_hide();
    jQuery.validator.addMethod("Username_Only", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9\_\-\.]+$/.test(value);
    });
	jQuery.validator.addMethod("Letters_Space_Only", function(value, element) {
		return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
	});
	jQuery.validator.addMethod("Numbers_Space_Only", function(value, element) {
		return this.optional(element) || /^[0-9\s]+$/.test(value);
	});
	jQuery.validator.addMethod("Plus_Number_Space_Only", function(value, element) {
		return this.optional(element) || /^[0-9\s\+]+$/.test(value);
	});
}).on("keyup", ".dataTables_filter input", function () {
    var search_str = jQuery(this).val();
    jQuery("#searchclear").hide();
    if(search_str != "") {
        jQuery("#searchclear").show();
    }
})
.on("click", ".searchclear", function () {
    jQuery(this).hide();
    jQuery(".dataTables_filter input").val("");
    table_var.search("").draw();
});

function alert_success(message) {
    jQuery(".alert_success").text(message);
    jQuery(".alert-success").show();
    alert_hide();
}

function alert_warning(message) {
    jQuery(".alert_warning").text(message);
    jQuery(".alert-warning").show();
    alert_hide();
}

function alert_danger(message) {
    jQuery(".alert_danger").text(message);
    jQuery(".alert-danger").show();
    alert_hide();
}

function alert_hide() {
    if(jQuery(".alert").length && jQuery(".alert:visible").length){
        jQuery(".alert:visible").fadeTo(10000, 500).slideUp(500, function(){});
        var data = jQuery(".alert:visible").attr("data-animation");
        jQuery(".alert:visible").addClass("animated "+data);

        setTimeout(function(){
            jQuery(".alert").each(function( index ) {
                var data = jQuery(this).attr("data-animation");
                jQuery(this).removeClass("animated " + data);
            });
        }, 2000);

    }
}

function block_body() {
    jQuery.blockUI({
        message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
        overlayCSS: {
            backgroundColor: "#FFF",
            opacity: 0.8,
            cursor: "wait"
        }, css: {
            border: 0,
            padding: 0,
            backgroundColor: "transparent"
        }
    });
}

function unblock_body() {
    jQuery.unblockUI();
}

function block_element(block_ele) {
	jQuery(block_ele).block({
        message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
        /*timeout: 2000, //unblock after 2 seconds*/
        overlayCSS: {
            backgroundColor: "#FFF",
            opacity: 0.8,
            cursor: "wait"
        }, css: {
            border: 0,
            padding: 0,
            backgroundColor: "transparent"
        }
    });
}

function unblock_element(block_ele) {
	block_ele.unblock();
}

function change_status(id, status) {
    var formData = new FormData();
    formData.append("table", table_name);
    formData.append("id", id);
    formData.append("status", status);
    jQuery.ajax({
        url: base_url + "admin/change-status",
        method: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function() {
            block_element(jQuery("#table_rows"));
        }, success: function(data) {
			var res = jQuery.parseJSON(data);
			if(res.status) {
				alert_success(res.message);
			} else {
				alert_danger(res.message);
			}
        }, complete: function() {
            unblock_element(jQuery("#table_rows"));
            table_var.ajax.reload( null, false );
        }, error: function(xhr, ajaxOptions, thrownError) {
            alert_danger("Your record is safe!");
        },
    });
}

function delete_record(id) {
    swal({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        allowOutsideClick: false,
        buttons: {
            cancel: {
                text: "No, cancel please!",
                value: null,
                visible: true,
                className: "btn-danger",
                closeModal: false,
            }, confirm: {
                text: "Yes, delete it!",
                value: true,
                visible: true,
                className: "btn-info",
                closeModal: false
            }
        }
    })
    .then((isConfirm) => {
        if (isConfirm) {
            var formData = new FormData();
            formData.append("table", table_name);
            formData.append("id", id);
            jQuery.ajax({
                url: base_url + "admin/soft-delete-record",
                method: "POST",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {
                    block_element(jQuery("#table_rows"));
                }, success: function(data) {
					var res = jQuery.parseJSON(data);
					if(res.status) {
						swal("Deleted!", res.message, "success");
					} else {
						swal("Cancelled!", res.message, "error");
					}
                }, complete: function() {
                    unblock_element(jQuery("#table_rows"));
                    table_var.ajax.reload( null, false );
                }, error: function(xhr, ajaxOptions, thrownError) {
                    swal("Cancelled!", "Your record is safe!", "error");
                },
            });
        } else {
            swal("Cancelled!", "Your record is safe!", "error");
            unblock_element(jQuery("#table_rows"));
        }
    });
}

function hard_delete_record(id) {
    swal({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        allowOutsideClick: false,
        buttons: {
            cancel: {
                text: "No, cancel please!",
                value: null,
                visible: true,
                className: "btn-danger",
                closeModal: false,
            }, confirm: {
                text: "Yes, delete it!",
                value: true,
                visible: true,
                className: "btn-info",
                closeModal: false
            }
        }
    })
    .then((isConfirm) => {
        if (isConfirm) {
            var formData = new FormData();
            formData.append("table", table_name);
            formData.append("id", id);
            jQuery.ajax({
                url: base_url + "admin/hard-delete-record",
                method: "POST",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function() {
                    block_element(jQuery("#table_rows"));
                }, success: function(data) {
					var res = jQuery.parseJSON(data);
					if(res.status) {
						swal("Deleted!", res.message, "success");
					} else {
						swal("Cancelled!", res.message, "error");
					}
                }, complete: function() {
                    unblock_element(jQuery("#table_rows"));
                    table_var.ajax.reload( null, false );
                }, error: function(xhr, ajaxOptions, thrownError) {
                    swal("Cancelled!", "Your record is safe!", "error");
                },
            });
        } else {
            swal("Cancelled!", "Your record is safe!", "error");
            unblock_element(jQuery("#table_rows"));
        }
    });
}

function validateAmount(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || key == 46 || key == 37 || key == 39) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else return true;
}

function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || key == 37 || key == 39) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else return true;
}

function validateNumberwithPlus(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || key == 37 || key == 39 || key == 43) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else return true;
}

function validateName(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || (key >=  65 && key <= 90) || (key >=  97 && key <= 122)) {
        return true;
    } else return false;
}

function validateFullName(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || key == 32 || (key >=  65 && key <= 90) || (key >=  97 && key <= 122)) {
        return true;
    } else return false;
}

function validateFullNameandNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (key == 8 || key == 32 || (key >=  65 && key <= 90) || (key >=  97 && key <= 122) || (key >= 48 && key <= 57)) {
        return true;
    } else return false;
}

function fileValidation() {
    var fileInput = document.getElementById("Image");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)jQuery/i;
    if (!allowedExtensions.exec(filePath)) {
		swal("Cancelled!", "Please upload jpeg, jpg and png file only!", "error");
        fileInput.value = "";
        return false;
    } else {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("image").src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
            document.getElementById("errormsg_file").innerHTML = "";
        }
    }
}

var imagesPreview = function(input, previewId, label = "") {
    if (input.files) {
        var filesAmount = input.files.length;
		jQuery("#" + previewId).empty();
		var element = jQuery(".custom-file-label");
		if(label != "") {
			var element = jQuery(label);
		}
		var label_text = "Choose Image";
		if(filesAmount > 1) {
			label_text = "Choose Images";
		}
		var filename = "";
		var is_no_image = false;
        for (i = 0; i < filesAmount; i++) {
			var imagename = "";
			if (typeof input.files[i] !== "undefined") {
				imagename = input.files[i].name;
			}
			var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
			if (!allowedExtensions.exec(imagename)) {
				jQuery("#" + previewId).empty();
				swal("Cancelled!", "Please upload jpeg, jpg and png file only!", "error");
				element.text(label_text);
				jQuery(input).val("");
				is_no_image = true;
			} else {
				var preview;
				filename += imagename + ", ";
				var reader = new FileReader();
				reader.onload = function(event) {
					preview = '<img src="' + event.target.result + '">';
					jQuery("#" + previewId).append(preview);
				}
				reader.readAsDataURL(input.files[i]);
			}
        }
		setTimeout(function(){
			if(is_no_image === true) {
				element.text(label_text);
				jQuery(input).val("");
				jQuery("#" + previewId).empty();
			} else {
				filename = filename.slice(0,-2);
				element.text(filename);
			}
		}, 500);
    }
};

function preview_image(image_path,preview_element) {
	var url = base_url + assets_folder + image_path;
	var img = new Image();
	img.onload = function() { jQuery(preview_element).html(url); };
	img.onerror = function() { jQuery(preview_element).html(assets_url + "images/no-image.png"); };
	img.src = url;
}

function rgbatohex(rgba) {
	var a, isPercent,
	rgb = rgba.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
	alpha = (rgb && rgb[4] || "").trim(),
	hex = rgb ?
	(rgb[1] | 1 << 8).toString(16).slice(1) +
	(rgb[2] | 1 << 8).toString(16).slice(1) +
	(rgb[3] | 1 << 8).toString(16).slice(1) : rgba;

	if (alpha !== "") {
		a = alpha;
	} else {
		a = 01;
	}
	/* multiply before convert to HEX */
	a = ((a * 255) | 1 << 8).toString(16).slice(1)
	hex = "#" + hex + a;

	return hex;
}

function hextorgba(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}

function number_format_short(num, precision = 1) {
	if(num < 999) {
		return Math.sign(num)*Math.abs(num);
	} else if(num < 999999) {
		return Math.sign(num)*((Math.abs(num)/1000).toFixed(precision)) + "K";
	} else if(num < 999999999) {
		return Math.sign(num)*((Math.abs(num)/1000000).toFixed(precision)) + "M";
	} else if(num < 999999999999) {
		return Math.sign(num)*((Math.abs(num)/1000000000).toFixed(precision)) + "B";
	} else {
		return Math.sign(num)*((Math.abs(num)/1000000000000).toFixed(precision)) + "T";
	}
}

/* console.log(number_format_short(900));
console.log(number_format_short(555900));
console.log(number_format_short(666999900));
console.log(number_format_short(777999999900));
console.log(number_format_short(888999999999900)); */