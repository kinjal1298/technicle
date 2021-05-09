table_name = "city";
var form_validator = null;
jQuery(document).ready( function() {
    //jQuery("#add_edit_section").hide();
	if(jQuery("#add_city_form").length) {
        form_validator = jQuery("#add_user_form").validate({
            rules: {
                city_name: "required",
            },
            messages: {
                city_name: "Please enter city name",
            }
        });
    }
	
	if(jQuery("#city_table").length) {
		table_var = jQuery("#city_table").DataTable({
            sDom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12't>>" +
                "<'row'<'col-xl-4 col-lg-6 col-md-4 col-md-4 col-12'i><'col-xl-4 col-lg-6 col-md-8 col-sm-4 col-12'B><'col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12'p>>",
            lengthMenu: [10, 25, 50, 100],
            pageLength: 10,
            bFilter:false,
            language: {
                paginate: {
					previous: '<i class="la la-angle-left font-small-3"></i>',
					next: '<i class="la la-angle-right font-small-3"></i>'
                }
            },
            order: [[0, "desc"]],
            serverSide: true,
            processing: true,
            ajax: {
                url: base_url + "admin/city-datatable",
                type: "POST",
            },
			columnDefs: [{
		            targets: 0,
                    searchable: false,
            	}, {
                    targets: 1,
                }, {
                    targets: 2,
                    searchable: false,
                    orderable: false,
                    render: function (data, type, full, meta) {
                        if(type === "export") {
                            return ((data == 1) ? "Active" : "Inactive");
                        } else {
                            return '<input class="change_status" data-user_id="'+full[0]+'" type="checkbox" '+( (data == 1) ? "checked" : "")+' data-toggle="toggle" data-onstyle="success" data-offstyle="danger" data-on="Active" data-off="Inactive" data-size="small" name="user_status" id="city_status" data-id="'+full[0]+'" />';
                        }
                    },
                }, 
                {
                    targets: 3,
                    searchable: false,
                    orderable: false,
                    render: function (data, type, full, meta) {
                        var return_text = '<div class="btn-group btn-group-sm" role="group"><button type="button" class="btn btn-icon btn-outline-admin-first edit_user" data-user_id="'+full[0]+'"><a href="'+base_url+'admin/city/edit/'+full[0]+'"><i class="la la-edit"></i></a></button><button type="button" class="btn btn-icon btn-outline-admin-second delete_city" data-city_id="'+full[0]+'"><i class="la la-trash"></i></button></div>';
                        return return_text;
                    },
                }
            ],
            createdRow: function( row, data, dataIndex ) {
                jQuery(row).attr("data-id", data[3]);
            },
            preDrawCallback: function( settings ) {
                block_element(jQuery("#table_rows"));
            },
            drawCallback: function( settings ) {
                unblock_element(jQuery("#table_rows"));
                jQuery(".change_status").bootstrapToggle();
            },
            initComplete: function( settings, json ) {
                jQuery(".change_status").bootstrapToggle();
            }
        });
        
	}
})




