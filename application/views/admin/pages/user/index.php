<?php
$assets = $this->config->item('base_url');
?>
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2">
                <h3 class="content-header-title">Users
                    <button type="button" id="add_user" class="btn btn-admin-first btn-small mr-1 mb-1 float-right"><a href="<?php echo $assets.'admin/user/add';?>"><i class="la la-plus font-small-3 mr-1"></i>Add</a></button>
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
                            <table id="users_table" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>City</th>
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
<script async src="<?php echo $this->config->item('base_url'); ?>assets/js/page_js/users.js?<?php echo time(); ?>" type="text/javascript"></script>
<script type="text/javascript">
    $(document).on('change','#user_status',function()
    {
        var status = $(this).attr('data-on');
        var user_id = $(this).attr('data-id');
        var isChecked = $(this).is(':checked');
        console.log(isChecked);
        if(isChecked == 'true' || isChecked == true)
        {
            var user_status = '1';
        }
        else
        {
            var user_status = '0';
        }
        $.ajax({
            type: 'POST',
            url: base_url+"admin/user/status", 
            data:{user_status:user_status,user_id:user_id},
            success: function(result){
               var data = jQuery.parseJSON(result);
               console.log(isChecked);
                if(data.status == 'true')
                {
                    swal('User activated Successfully');
                }
                else
                {
                    swal('User inactivated');
                }

        }});
        
    })
    $(document).on('click','.delete_user',function()
    {   
        var user_id = $(this).attr('data-user_id');
        swal({
          title: "Are you sure?",
          text: "You want to deleted this item",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            console.log(base_url+"admin/user/delete");
            $.ajax({
            type: 'POST',
            url: base_url+"admin/user/delete", 
            data:{user_id:user_id},
            success: function(result){
               var data = jQuery.parseJSON(result);
               console.log(isChecked);
                if(data.status == 'true')
                {
                    swal('User deleted successfully');
                }
                else
                {
                    swal('User not deleted');
                }

        }});
          } else {
            swal("Your imaginary file is safe!");
          }
        });
    })
</script>