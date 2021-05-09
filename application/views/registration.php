<?php
$assets = $this->config->item('assets');
$base_url = $this->config->item('base_url');
?>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Modern admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities with bitcoin dashboard.">
    <meta name="keywords" content="admin template, modern admin template, dashboard template, flat admin template, responsive admin template, web app, crypto dashboard, bitcoin dashboard">
    <meta name="author" content="PIXINVENT">
    <title><?php echo config_item('site_name'); ?> - Login</title>
    <!-- <link rel="apple-touch-icon" href="<?php echo config_item('favicon_large'); ?>"> -->
   <!--  <link rel="shortcut icon" type="image/x-icon" href="<?php echo config_item('favicon'); ?>"> -->
    <link href="<?php echo $assets; ?>css/line-awesome/css/line-awesome.min.css" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/vendors.css">
    <!-- END VENDOR CSS-->
    <!-- BEGIN MODERN CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/app.css">
    <!-- END MODERN CSS-->
    <!-- BEGIN Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets; ?>css/palette-gradient.css">
    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo $assets;?>css/custom.css">
    <!-- END Custom CSS-->
  <style type="text/css">
    html body.bg-full-screen-image{
      background-color: rgb(255 255 255)!important;
    }
    .btn-outline-first {
      border-color: #009688!important;
      background-color: transparent;
      color: #009688!important;
    }
    html body a {
      color: #009688!important;
    }
    .header_color{color: #009688!important;}
    .form-control:focus {
      border-color: #009688!important;;
    }
    .btn_color{ background-color: #009688!important;  }
  </style>
</head>
<body class="vertical-layout vertical-menu 1-column bg-full-screen-image menu-expanded blank-page blank-page"
data-open="click" data-menu="vertical-menu" data-col="1-column">
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body p-0 btn_color" >
                <section class="flexbox-container">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="col-md-4 col-10 box-shadow-2 p-0">
                            <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                                <div class="card-header border-0">
                                    <div class="card-title text-center">
                                        <!-- <img src="<?php echo config_item('admin_logo'); ?>" alt="<?php echo config_item('site_name'); ?>" height="100"> -->
                                        <h2 class="header_color"><?php echo config_item('site_name');?></h2>
                                    </div>
                  <?php   
                  $success_message = "";
                  $error_message = "";
                  $success_show = "none";
                  $error_show = "none";
                  if($this->session->flashdata('message') != "") {
                    $success_message = $this->session->flashdata('message');
                    unset($_SESSION['message']);
                    $success_show = "block";
                  } else if($this->session->flashdata('message_error') != "") {
                    $error_message = $this->session->flashdata('message_error');
                    unset($_SESSION['message_error']);
                    $error_show = "block";
                  }
                  ?>
                  <div class="alert alert-success mt-1" role="alert" style="display: <?php  echo $success_show; ?>;">
                    <strong>Success !</strong> <span class="success_message"><?php echo $success_message; ?></span>
                  </div>
                  <div class="alert alert-danger mt-1" role="alert" style="display: <?php  echo $error_show; ?>;">
                    <strong>Error !</strong> <span class="error_message"><?php echo $error_message; ?></span>
                  </div>
                                </div>
                                <div class="card-body">
                                    <form id="user_login" class="form-horizontal" action="" method="POST" accept-charset="utf-8" novalidate>
                                        <fieldset class="form-group position-relative has-icon-left">
                                            <input type="text" class="form-control" id="user_email" name="user_email" placeholder="Your Email" onkeydown="if (event.keyCode == 13) document.getElementById('admin_login_submit').click()" />
                                            <div class="form-control-position"> <i class="las la-envelope"></i> </div>
                                        </fieldset>
                                        <fieldset class="form-group position-relative has-icon-left">
                                            <input type="password" class="form-control" id="user_password" name="user_password" placeholder="Enter Password" onkeydown="if (event.keyCode == 13) document.getElementById('admin_login_submit').click()" />
                                            <div class="form-control-position"> <i class="la la-key"></i> </div>
                                        </fieldset>
                                        <div class="form-group row">
                                            <div class="col-12 text-center text-sm-left">
                                                <button type="submit" id="admin_login_submit" class="btn btn-outline-first btn-block"><i id="unlock_i" class="ft-unlock"></i> Login</button>
                                            </div>
                                        </div>
                                        <div>
                                          <a href="<?php echo $base_url.'registration' ?>">SignUp?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <!--  -->
    <!-- BEGIN VENDOR JS-->
    <script src="<?php echo $assets; ?>js/vendors.min.js" type="text/javascript"></script>
    <!-- BEGIN VENDOR JS-->
    <!-- BEGIN PAGE VENDOR JS-->
    <script async src="<?php echo $assets; ?>js/jquery.validate.min.js" type="text/javascript"></script>
    <script async src="<?php echo $assets; ?>js/icheck.min.js" type="text/javascript"></script>
    <!-- END PAGE VENDOR JS-->
  <script async src="<?php echo $assets; ?>js/page_js/login.js" type="text/javascript"></script>
</body>
</html>