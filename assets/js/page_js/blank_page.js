jQuery(document).ready( function() {
    block_body();
    setTimeout(function(){unblock_body();}, 1500);

    /* Block Element */
    jQuery(".block-element").on("click", function() {
        block_ele = jQuery(this).closest(".card");
        jQuery(block_ele).block({
            message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
            /*timeout: 2000,*/ //unblock after 2 seconds
            overlayCSS: {
                backgroundColor: "#fff",
                opacity: 0.8,
                cursor: "wait"
            }, css: {
                border: 0,
                padding: 0,
                backgroundColor: "transparent"
            }
        });
        setTimeout(function(){unblock_element();}, 1500);
    });


    // Block sidebar
    jQuery(".block-sidebar").on("click", function() {
        block_ele = jQuery(".main-menu");
        jQuery(block_ele).block({
            message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 2000, //unblock after 2 seconds
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
    });

    /* Block page */
    jQuery(".block-page").on("click", function() {
        jQuery.blockUI({
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
        setTimeout(function(){ jQuery.unblockUI(); }, 5000);
    });

    /*Date JS*/
    jQuery("#date_range_1").daterangepicker({
        opens: "left"
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD"));
    });

    jQuery("#date_range_2").daterangepicker({
        timePicker: true,
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour").add(32, "hour"),
        locale: {
			format: "MM/DD/YYYY hh:mm A"
        }
    }, function(start, end, label) {
        console.log("A new date time selection was made: " + start.format("YYYY-MM-DD hh:mm A") + " to " + end.format("YYYY-MM-DD hh:mm A"));
    });

    jQuery("#date_range_3").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"),10)
    }, function(start, end, label) {
        var years = moment().diff(start, "years");
        console.log("You are " + years + " years old!");
    });

    var start = moment().subtract(29, "days");
    var end = moment();

    jQuery("#reportrange").daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           "Today": [moment(), moment()],
           "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
           "Last 7 Days": [moment().subtract(6, "days"), moment()],
           "Last 30 Days": [moment().subtract(29, "days"), moment()],
           "This Month": [moment().startOf("month"), moment().endOf("month")],
           "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    }, function(start, end, label) {
        jQuery("#reportrange span").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
    });

    jQuery("#date_range_4").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minDate: moment(),
    }, function(start, end, label) {
        var years = moment().diff(start, "years");
        console.log("You are " + years + " years old!");
    });

    jQuery("#date_range_5").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minDate: moment(),
        timePicker: true,
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour").add(32, "hour"),
        autoUpdateInput: false,
    }, function(start, end, label) {
        jQuery("#date_range_5").val(start.format("MM/DD/YYYY hh:mm A"));
    });

    if(jQuery(".sample_table").length){
        /* Datatable sample_table */
        var check_ids = [];
        table_var = jQuery(".sample_table").DataTable({
            sDom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12't>>" +
                "<'row'<'col-xl-4 col-lg-6 col-md-4 col-md-4 col-12'i><'col-xl-4 col-lg-6 col-md-8 col-sm-4 col-12'B><'col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12'p>>",
            lengthMenu: [10, 25, 50, 100, 250, 500],
            pageLength: 10,
            buttons: [{
                    extend: "copy",
                    exportOptions: {
						columns: [ 0, 1, 2, 3, 4],
						orthogonal: "export"
                    }
                }, {
                    extend: "csv",
                    exportOptions: {
                        columns: [ 0, 1, 2, 3, 4],
						orthogonal: "export"
                    }
                }, {
                    extend: "excel",
                    exportOptions: {
                        columns: [ 0, 1, 2, 3, 4],
						orthogonal: "export"
                    }
                }, {
                    extend: "pdf",
                    exportOptions: {
                        columns: [ 0, 1, 2, 3, 4],
						orthogonal: "export"
                    },
					customize: function (doc) {
						/* If Any export with Arabic word that time use bellow line for Arabic export */
						doc.defaultStyle.font = 'Cairo';
						/* doc.defaultStyle.font = 'Tajawal'; */
					}
                }, {
                    extend: "print",
                    exportOptions: {
                        columns: [ 0, 1, 2, 3, 4],
						orthogonal: "export"
                    }
                },
            ],
            language: {
                paginate: {
					previous: '<i class="la la-angle-left font-small-3"></i>',
					next: '<i class="la la-angle-right font-small-3"></i>'
                }
            },
            order: [[1, "asc"]],
            serverSide: true,
            processing: true,
            ajax: {
                url: base_url + "admin/DashboardController/json_data_function",
                type: "POST",
            },
            columnDefs: [
				{
					targets: 0,
					searchable: false,
					orderable: false,
					className: "dt-body-center",
					render: function (data, type, full, meta) {
						if(type === "export") {
							return data;
						} else {
							return '<input type="checkbox" class="select-checkbox" name="id[]" value="' + jQuery('<div/>').text(data).html() + '">';
						}
					}
				}, {
					targets: 1,
					render: function (data, type, full, meta) {
						if(type === "export") {
							var arabic_test = /[\u0600-\u06FF]/;
							if(arabic_test.test(data)) {
								/* console.log(data.split(' ').reverse());
								console.log(data.split(' ').reverse().join(' ')); */
								/* data = data.split(' ').reverse().join('  '); */
								data = data.split(' ').join('  ');
							}
						}
						return data;
					},
				},
			],
            createdRow: function( row, data, dataIndex ) {
                jQuery(row).attr("data-id", data[0]);
            },
            preDrawCallback: function( settings ) {
                block_element(jQuery("#table_rows"));
            },
            drawCallback: function( settings ) {
                unblock_element(jQuery("#table_rows"));
            },
        });
        jQuery(".buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel").addClass("btn btn-info mr-1");

        /*Handle click on "Select all" control*/
        jQuery("#example-select-all").on("click", function(){
            /*Get all rows with search applied*/
            var rows = table_var.rows({ "search": "applied" }).nodes();
            /*Check/uncheck checkboxes for all rows in the table*/
            jQuery('input[type="checkbox"]', rows).prop("checked", this.checked);
        });

        /*Handle click on checkbox to set state of "Select all" control*/
        jQuery(".sample_table tbody").on("change", 'input[type="checkbox"]', function(){
            var el = jQuery("#example-select-all").get(0);
            if(!this.checked){
                if(el && el.checked && ("indeterminate" in el)){
                    el.checked = false;
                }
            } else {
                var all_checked = true;
                var rows = table_var.rows({ "search": "applied" }).nodes();
                jQuery('input[type="checkbox"]', rows).each(function(){
                    if(!this.checked){
                        all_checked = false;
                    }
                });
                if(all_checked){
                    el.indeterminate = false;
                    el.checked = true;
                }
            }
        });

        /*Handle click on checkbox to set state of "Select all" control*/
        jQuery(document).on("click", "#Checked_Val", function(){
            check_ids = [];
            var rows = table_var.rows({ "search": "applied" }).nodes();
            jQuery('input[type="checkbox"]', rows).each(function(){
                if(this.checked){
                    check_ids.push( this.value );
                }
            });
            console.log(check_ids);
        });

        jQuery(document).bind("ready ajaxComplete", function(){
            jQuery("#table_rows").sortable({
                items: "tr",
                cursor: "move",
                opacity: 0.6,
                update: function() {
                    var info = table_var.page.info();
                    var start_index = ((parseInt(info.page) + 1) * parseInt(info.length)) - (parseInt(info.length) - 1);
                    var order_row_array = [];
                    jQuery("#table_rows tr").each(function(index,element) {
                        order_row_array.push({
                            id: jQuery(this).attr("data-id"),
                            row_order: start_index,
                        });
						start_index++;
                    });
					console.log(order_row_array);
                }
            });
        });
    }

    /*Text With Colors*/
    jQuery(".demo").each( function() {
        /* Dear reader, it's actually very easy to initialize MiniColors. For example:
        jQuery(selector).minicolors();
        The way I've done it below is just for the demo, so don't get confused
        by it. Also, data- attributes aren't supported at this time...they're
        only used for this demo. */
        jQuery(this).minicolors({
		control: jQuery(this).attr("data-control") || "hue",
		defaultValue: jQuery(this).attr("data-defaultValue") || "",
		format: jQuery(this).attr("data-format") || "hex",
		keywords: jQuery(this).attr("data-keywords") || "",
		inline: jQuery(this).attr("data-inline") === "true",
		letterCase: jQuery(this).attr("data-letterCase") || "lowercase",
		opacity: jQuery(this).attr("data-opacity"),
		position: jQuery(this).attr("data-position") || "bottom",
		swatches: jQuery(this).attr("data-swatches") ? jQuery(this).attr("data-swatches").split("|") : [],
		change: function(value, opacity) {
			if( !value ) return;
			if( opacity ) value += ", " + opacity;
			if( typeof console === "object" ) {
				console.log(value);
			}
		},
		theme: "bootstrap"
        });
    });
	
	jQuery(".js-select2-1").select2();
	jQuery(".js-select2-2").select2({
		placeholder: "Select your",
		allowClear: true
	});
	
	/* FullCalendar */
	jQuery("#calendar").fullCalendar({
		header: {
			left: "prev,next today",
			center: "title",
			right: "month,agendaWeek,agendaDay,listWeek"
		},
		navLinks: false,
		eventLimit: true,
		eventLimit: 2,
		eventDurationEditable: false,
		timeZone: time_zone,
		eventConstraint: {
			start: TODAY,
			end: "3000-01-01"
		},
		eventRender: function (event, element) {
			element.find(".fc-time").text(event.time);
			element.find(".fc-title").after(jQuery("<h5 class=\"m-0 text-white\">"+event.name+"</h5>"+
											"<small>"+
												"<time class=\"media-meta text-white font-medium-2\">"+event.amount+"</time>"+
											"</small>"));
			element.attr("href", "javascript:void(0);");
			element.click(function () {
				console.log(event.id);
			});
		},
		eventDrop: function(event, delta, revertFunc) {
			var event_id = event.id;
			var event_date = event.start.format("YYYY-MM-DD");
			console.log(event_id);
			console.log(event_date);
			revertFunc();
		},
		dayClick: function (date, jsEvent, view) {
			var selected_datetime = new Date(date);
			var selected_date = selected_datetime.getDate();
			var selected_month = selected_datetime.getMonth() + 1;
			var selected_year = selected_datetime.getFullYear();
			var selected_date_with_format = selected_year+"-"+selected_month+"-"+selected_date;
			if (new Date(selected_date_with_format).getTime() <= new Date(TODAY).getTime()) {
				console.log("Previous Date");
			} else {
				console.log(selected_date_with_format);
			}
		},
		events: base_url + "admin/DashboardController/full_calendar_json"
	});
	
	/* CKEditor 4 Start */
	if(jQuery("#ck_editor_sample").length) {
		if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
			CKEDITOR.tools.enableHtml5Elements( document );
		
		CKEDITOR.config.height = 150;
		CKEDITOR.config.width = "auto";
		/* CKEDITOR.config.uiColor = "#1E9FF2"; */
		
		var wysiwygareaAvailable = isWysiwygareaAvailable();
		
		var editorElement = CKEDITOR.document.getById("ck_editor_sample");
		
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace("ck_editor_sample");
		} else {
			editorElement.setAttribute( "contenteditable", "true" );
			CKEDITOR.inline("ck_editor_sample");
		}
		
		function isWysiwygareaAvailable() {
			if ( CKEDITOR.revision == ( "%RE" + "V%" ) ) {
				return true;
			}
			return !!CKEDITOR.plugins.get( "wysiwygarea" );
		}
	}
	/* CKEditor 4 End */
	
	/* intlTelInput Start */
	var intltelinput_1 = window.intlTelInput(document.querySelector("#intltelinput_1"), {
		nationalMode: false,
		preferredCountries: ["IN", "US"],
		utilsScript: assets_url + "js/utils.js",
	});
	
	var intltelinput_2 = window.intlTelInput(document.querySelector("#intltelinput_2"), {
		excludeCountries: ["CN", "PK"],
		autoPlaceholder: "off",
		utilsScript: assets_url + "js/utils.js",
	});
	
	var error_array = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
	
	var intltelinput_3 = window.intlTelInput(document.querySelector("#intltelinput_3"), {
		preferredCountries: ["IN"],
		onlyCountries: ["US", "IN", "CA", "FR", "NZ", "ES"],
		utilsScript: assets_url + "js/utils.js",
	});
	function reset_intltelinput_3() {
		jQuery("#intltelinput_3").removeClass("text-danger");
	}
	jQuery("#intltelinput_3").on("blur, change, keyup", function() {
		reset_intltelinput_3();
		if (jQuery(this).val().trim()) {
			if (intltelinput_3.isValidNumber()) {
				jQuery("#intltelinput_3").removeClass("text-danger");
				console.log(intltelinput_3.getSelectedCountryData());
			} else {
				jQuery("#intltelinput_3").addClass("text-danger");
				var error = intltelinput_4.getValidationError();
				(typeof error_array[error] !== "undefined") ? console.log(error_array[error]) : "";
			}
		}
	});
	
	var intltelinput_4 = window.intlTelInput(document.querySelector("#intltelinput_4"), {
		preferredCountries: ["IN"],
		nationalMode: false,
		formatOnDisplay: true,
		utilsScript: assets_url + "js/utils.js",
	});
	function reset_intltelinput_4() {
		jQuery("#intltelinput_4").removeClass("text-danger");
	}
	jQuery("#intltelinput_4").on("blur, change, keyup", function() {
		reset_intltelinput_4();
		if (typeof intlTelInputUtils !== "undefined") {
			var currentText = intltelinput_4.getNumber(intlTelInputUtils.numberFormat.E164);
			if (typeof currentText === "string") {
				intltelinput_4.setNumber(currentText);
				if (jQuery(this).val().trim()) {
					if (intltelinput_4.isValidNumber()) {
						jQuery("#intltelinput_4").removeClass("text-danger");
						console.log(intltelinput_4.getSelectedCountryData());
					} else {
						var error = intltelinput_4.getValidationError();
						(typeof error_array[error] !== "undefined") ? console.log(error_array[error]) : "";
						jQuery("#intltelinput_4").addClass("text-danger");
					}
				}
			}
		}
	});
	/* intlTelInput End */
});

/*Ratings*/
jQuery.fn.raty.defaults.path = assets_url + "images/raty/";
// Round Enabled
jQuery("#round-enabled").raty({
    score: 3.26
});

// Round Disabled
jQuery("#round-disabled").raty({
    halfShow : false,
    score    : 3.26
});

// Half Star
jQuery("#half-star").raty({
    half     : true,
});

/*Animation Alerts*/
setInterval(function(){
    jQuery(".alert").each(function( index ) {
        jQuery(this).show();
        var data = jQuery(this).attr("data-animation");
        jQuery(this).addClass("animated "+data);
    });
    timeout_alert();
}, 3000);

function timeout_alert() {
    setTimeout(function(){
        jQuery(".alert").each(function( index ) {
            var data = jQuery(this).attr("data-animation");
            jQuery(this).removeClass("animated "+data);
        });
    }, 2000);
}

jQuery("#sidebar-page-navigation").on("click", "a.nav-link", function(e){ });