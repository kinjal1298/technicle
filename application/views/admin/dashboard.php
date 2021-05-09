
<div class="app-content content">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-12 mb-2">
                <h3 class="content-header-title">Dashboard</h3>
            </div>
        </div>
        <div class="content-body">

            <div class="row">
                <div class="col-xl-6 col-lg-6 col-12">
                    <div class="card pull-up">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="warning"></h3>
                                        <span>User Registrations</span>
                                        
                                    </div>
                                    <div class="align-self-center">
                                        <span><h4><?php echo isset($user_count) && $user_count > 0 ? $user_count:"" ?></h4></span>
                                        <i class="la la-user-plus warning font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                    <div class="card pull-up">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success"></h3>
                                        <span>City</span>
                                    </div>
                                    <div class="align-self-center">
                                        <span><h4><?php echo isset($city_count) && $city_count > 0 ? $city_count:"" ?></h4></span>
                                        <i class="la la-quote-right success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card pull-up">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="info"></h3>
                                        <span>Demo</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="la la-slack info font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="col-xl-3 col-lg-6 col-12">
                    <div class="card pull-up">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="danger"></h3>
                                        <span>Demo</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="la la-palette danger font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</div>
