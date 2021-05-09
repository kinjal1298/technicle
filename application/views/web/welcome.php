<?php
 $assets = $this->config->item('assets');
 $base_url = $this->config->item('base_url');?>
<!DOCTYPE html>
<html>
<head>
	<title>Website</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui, maximum-scale=1">
    <meta name="description" content="Modern admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities with bitcoin dashboard.">
    <meta name="keywords" content="admin template, modern admin template, dashboard template, flat admin template, responsive admin template, web app, crypto dashboard, bitcoin dashboard">
    <meta name="author" content="PIXINVENT">
    <title>Website</title>
    <link rel="apple-touch-icon" href="<?php echo config_item("favicon_large"); ?>">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo config_item("favicon"); ?>">
    <!-- BEGIN VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/vendors.css">
    <!-- END VENDOR CSS-->
    <!-- BEGIN MODERN CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/app.css">
    <!-- END MODERN CSS-->
    <!-- BEGIN Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/vertical-menu.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/palette-gradient.css">
    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/bootstrap-toggle.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/style.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/daterangepicker.css">
    
<style type="text/css">
	/* Required for full background image */

html,
body,
header,
#intro-section {
    height: 100%;
}

@media (max-width: 740px) {
    html,
    body,
    header,
    #intro-section {
        height: 100vh;
    }
}

.top-nav-collapse, .page-footer {
    background-color: #563e91 !important;
}

.navbar:not(.top-nav-collapse) {
    background: transparent !important;
}

@media (max-width: 991px) {
    .navbar:not(.top-nav-collapse) {
        background: #563e91 !important;
    }
}

.rgba-gradient {
    background: rgba(35, 7, 77, 0.6);
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, rgba(204, 83, 51, 0.6), rgba(35, 7, 77, 0.6));
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(204, 83, 51, 0.6), rgba(35, 7, 77, 0.6));
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}


.img-gradient:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(220, 66, 37, 0.5)), color-stop(100%, rgba(0, 47, 75, 0.5)));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
    /* Opera 11.10+ */
    /* IE10+ */
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 47, 75, 0.5)), to(rgba(220, 66, 37, 0.5)));
    background: linear-gradient(to bottom, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000', GradientType=0);
    /* IE6-9 */
}

</style>
	
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/vendors.min.js" type="text/javascript"></script>
    <!-- BEGIN VENDOR JS-->
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/bootstrap-toggle.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/jquery.validate.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/sweetalert.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/moment.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/daterangepicker.min.js" type="text/javascript"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>assets/js/page_js/admin_custom.js" type="text/javascript"></script>
</head>
    <!-- Main navigation -->
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            
        </nav>
        <!-- Navbar -->
        <!-- Full Page Intro -->
        <div id="intro-section" class="view" style="overflow-x: hidden;">
            <!-- <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsinline
                autoplay muted loop>
                <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4">
            </video> -->
            <!-- Mask & flexbox options-->
            <div class="mask rgba-gradient d-flex justify-content-center align-items-center" style="height: 100%;">
                <!-- Content -->
                <div class="container px-md-3 px-sm-0">
                    <!--Grid row-->
                    <div class="row wow fadeIn">
                        <!--Grid column-->
                        <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
                            <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Creative Agency</h3>
                            <hr class="hr-light my-4 w-75">
                            <h4 class="subtext-header mt-2 mb-4">Please Contact admin to activate your account.</h4>
                            <a href="<?php echo $base_url.'logout';?>" class="btn btn-rounded btn-outline-white">
                                <i class="fa fa-home"></i> Logout
                            </a>
                        </div>
                        <!--Grid column-->
                    </div>
                    <!--Grid row-->
                </div>
                <!-- Content -->
            </div>
            <!-- Mask & flexbox options-->
        </div>
        <!-- Full Page Intro -->
    </header>
</body>
</html>
