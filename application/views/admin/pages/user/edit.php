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
                                    <input type="text" id="first_name" name="first_name" class="form-control" placeholder="First Name" value="<?php echo isset($userdata['firstname']) && $userdata['firstname'] != '' ? $userdata['firstname']: '';?>" />
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="party_name">Last Name<span class="text-danger">*</span></label>
                                    <input type="text" id="last_name" name="last_name" class="form-control" placeholder="Last Name" value="<?php echo isset($userdata['lastname']) && $userdata['lastname'] != '' ? $userdata['lastname']:'';?>" />
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="email">Email<span class="text-danger">*</span></label>
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Email"/ value="<?php echo isset($userdata['email']) && $userdata['email'] != ''? $userdata['email']:'';?>">
                                </fieldset>
                            </div>
                            
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <fieldset class="form-group">
                                    <label for="city">City<span class="text-danger">*</span></label>
                                    <!-- <input type="text" id="city" name="city" class="form-control" placeholder="City"/> -->
                                    <select name="city" id="city" class="form-control">
                                        <?php
                                        if(isset($citydata) && !empty($citydata))
                                            { 
                                                foreach ($citydata as $key => $value) 
                                                { 
                                                    if($userdata['city'] ==$value['id'])
                                                    { ?>
                                                        <option value="<?php echo $value['id']; ?>" selected><?php echo $value['name'];?></option>
                                                    <?php 
                                                    }
                                                    else
                                                    { ?>
                                                        <option value="<?php echo $value['id']; ?>"><?php echo $value['name'];?></option>
                                                    <?php } 

                                                }?>
                                                
                                            <?php 
                                            }
                                        ?>
                                    </select>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <?php
                                    $is_read ='';
                                    $is_write ='';
                                    $is_travel = '';
                                    $is_cooking = '';
                                    $is_gamming = '';
                                    if(isset($user_hobby_data) && !empty($user_hobby_data))
                                    {
                                        foreach ($user_hobby_data as $key => $value) 
                                        {
                                           if(in_array('Reading',$user_hobby_data))
                                            {
                                                $is_read ='checked';
                                            }
                                            else
                                            {
                                                $is_read =' ';
                                            }

                                            if(in_array('Writting',$user_hobby_data))
                                            {
                                                $is_write ='checked';
                                            }
                                            else
                                            {
                                                $is_write =' ';
                                            }

                                            if(in_array('Travelling',$user_hobby_data))
                                            {
                                                $is_travel ='checked';
                                            }
                                            else
                                            {
                                                $is_travel =' ';
                                            }

                                            if(in_array('Cooking',$user_hobby_data))
                                            {
                                                $is_cooking ='checked';
                                            }
                                            else
                                            {
                                                $is_cooking =' ';
                                            }

                                            if(in_array('Gaming',$user_hobby_data))
                                            {
                                                $is_gamming ='checked';
                                            }
                                            else
                                            {
                                                $is_gamming =' ';
                                            }
                                        }
                                    } ?>
                                    <label for="hobby">Hobbies<span class="text-danger">*</span></label><br/>
                                    <input type="checkbox" id="hobby1" name="hobby[]" value="Reading" <?php echo $is_read;?>>
                                    <label for="hobby1"> Reading</label><br>
                                    <input type="checkbox" id="hobby2" name="hobby[]" value="Writting" <?php echo $is_write;?>>
                                    <label for="hobby2"> Writting</label><br>
                                    <input type="checkbox" id="hobby3" name="hobby[]" value="Travelling" <?php echo $is_travel;?>>
                                    <label for="hobby3"> Travelling</label><br>
                                    <input type="checkbox" id="hobby4" name="hobby[]" value="Cooking"  <?php echo $is_cooking;?>>
                                    <label for="hobby4">Cooking</label><br>
                                    <input type="checkbox" id="hobby5" name="hobby[]" value="Gaming" <?php echo $is_gamming;?>>
                                    <label for="hobby5">Gaming</label><br>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="form-group">
                                    <label for="hobby">Gender
                                        <span class="text-danger">*</span>
                                    </label>
                                    <fieldset class="form-group">
                                    <input type="radio" name="gender" id="male" value="m" <?php echo isset($userdata['gender']) && $userdata['gender'] == 'm' ? 'checked':''; ?>>
                                    <label for="male">Male</label>

                                    <input type="radio" name="gender" id="female" value="f" <?php echo isset($userdata['gender']) && $userdata['gender'] == 'f' ? 'checked':'';?>>
                                    <label for="female">Female</label>

                                    <input type="radio" name="gender" id="other" value="o" <?php echo isset($userdata['gender']) && $userdata['gender'] == 'o' ? 'checked':'';?>>
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
