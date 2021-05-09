<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Add Edit Section Start -->
            <section id="add_edit_section" class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form id="add_city_form" name="add_city_form" class="row" method="post" enctype="multipart/form-data">
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <label for="cityname">Name<span class="text-danger">*</span></label>
                                    <input type="text" id="city_name" name="city_name" class="form-control" placeholder="City Name"/>
                                </fieldset>
                            </div>
                            <div class="col-sm-12">
                                <fieldset class="form-group">
                                    <button type="submit" id="submit_city" class="btn btn-admin-first btn-min-width mr-1 mb-1">Submit</button>
                                    <button type="button" id="cancel_user" class="btn btn-admin-second btn-min-width mr-1 mb-1"><a href="<?php echo $this->config->item('base_url').'admin/city'; ?>">Cancel</a></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <!-- Add Edit Section End -->
        </div>
    </div>
</div>
