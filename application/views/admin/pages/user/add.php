
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Add Edit Section Start -->
            <section id="add_edit_section" class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form id="add_user_form" name="add_user_form" class="row" method="post" enctype="multipart/form-data">
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <label for="first_name">First Name<span class="text-danger">*</span></label>
                                    <input type="text" id="first_name" name="first_name" class="form-control" placeholder="First Name"/>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="party_name">Last Name<span class="text-danger">*</span></label>
                                    <input type="text" id="last_name" name="last_name" class="form-control" placeholder="Last Name"/>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="email">Email<span class="text-danger">*</span></label>
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Email"/>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="party_name">Password<span class="text-danger">*</span></label>
                                    <input type="password" id="password" name="password" class="form-control" placeholder="Password"/>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="city">City<span class="text-danger">*</span></label>
                                    <!-- <input type="text" id="city" name="city" class="form-control" placeholder="City"/> -->
                                    <select name="city" id="city" class="form-control">
                                         <option value="">Select city</option>
                                        <?php
                                            if(isset($citydata) && !empty($citydata))
                                            { 
                                                foreach ($citydata as $key => $value) 
                                                { ?>
                                                    <option value="<?php echo $value['id']; ?>"><?php echo $value['name'];?></option>
                                                <?php 
                                                }?>
                                                
                                            <?php 
                                            }
                                        ?>
                                    </select>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <label for="hobby">Hobbies<span class="text-danger">*</span></label><br/>
                                    <input type="checkbox" id="hobby1" name="hobby[]" value="Reading">
                                    <label for="hobby1"> Reading</label><br>
                                    <input type="checkbox" id="hobby2" name="hobby[]" value="Writting">
                                    <label for="hobby2"> Writting</label><br>
                                    <input type="checkbox" id="hobby3" name="hobby[]" value="Travelling">
                                    <label for="hobby3"> Travelling</label><br>
                                    <input type="checkbox" id="hobby4" name="hobby[]" value="Cooking">
                                    <label for="hobby4">Cooking</label><br>
                                    <input type="checkbox" id="hobby5" name="hobby[]" value="Gaming">
                                    <label for="hobby5">Gaming</label><br>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <label for="hobby">Gender
                                        <span class="text-danger">*</span>
                                    </label>
                                    <fieldset class="form-group">
                                    <input type="radio" name="gender" id="male" value="m">
                                    <label for="male">Male</label>

                                    <input type="radio" name="gender" id="female" value="f">
                                    <label for="female">Female</label>

                                    <input type="radio" name="gender" id="other" value="o">
                                    <label for="other">other</label>
                                </fieldset>
                            </div>
                            <div class="col-sm-12">
                                <fieldset class="form-group">
                                    <button type="submit" id="submit_user" class="btn btn-admin-first btn-min-width mr-1 mb-1">Submit</button>
                                    <button type="button" id="cancel_user" class="btn btn-admin-second btn-min-width mr-1 mb-1"><a href="<?php echo $this->config->item('base_url').'admin/user'; ?>">Cancel</a></button>
                                </fieldset>
                            </div>
                            <div id="image_preview" class="col-sm-6 small_image_preview"></div>
                        </form>
                    </div>
                </div>
            </section>
            <!-- Add Edit Section End -->
        </div>
    </div>
</div>
