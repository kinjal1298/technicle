<?php
$assets = $this->config->item('base_url');
?>
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2">
                <h3 class="content-header-title">City
                    <button type="button" id="add_user" class="btn btn-admin-first btn-small mr-1 mb-1 float-right"><a href="<?php echo $assets.'admin/city/add';?>"><i class="la la-plus font-small-3 mr-1"></i>Add</a></button>
                </h3>
            </div>
        </div>
        <div class="content-body">
            <!-- Add Edit Section Start -->
            <!-- Add Edit Section End -->
            <!-- Description -->
            <section id="description" class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="city_table" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="table_rows"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <!--/ Description -->
        </div>
    </div>
</div>
<script type="text/javascript">
var base_url = '<?php echo $this->config->item('base_url');?>'
</script>
<script async src="<?php echo $this->config->item('base_url'); ?>assets/js/page_js/city.js?<?php echo time(); ?>" type="text/javascript"></script>
<script type="text/javascript">
    $(document).on('change','#city_status',function()
    {
        var user_id = $(this).attr('data-id');
        var isChecked = $(this).is(':checked');
        if(isChecked == 'true' || isChecked == true)
        {
            var city_status = '1';
        }
        else
        {
            var city_status = '0';
        }
        $.ajax({
            type: 'POST',
            url: base_url+"admin/city/status", 
            data:{city_status:city_status,user_id:user_id},
            success: function(result){
               var data = jQuery.parseJSON(result);
               console.log(isChecked);
                if(data.status == 'true')
                {
                    swal('City activated Successfully');
                }
                else
                {
                    swal('City inactivated');
                }

        }});
        
    })
    $(document).on('click','.delete_city',function()
    {   
        var city_id = $(this).attr('data-city_id');
        swal({
          title: "Are you sure?",
          text: "You want to deleted this item ?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            $.ajax({
            type: 'POST',
            url: base_url+"admin/city/delete", 
            data:{city_id:city_id},
            success: function(result){
               var data = jQuery.parseJSON(result);
                if(data.status == 'true')
                {
                    swal('City deleted successfully');
                    location.reload();
                }
                else
                {
                    swal('City not deleted');
                }

        }});
          } else {
            swal("Your imaginary file is safe!");
          }
        });
    })
</script>