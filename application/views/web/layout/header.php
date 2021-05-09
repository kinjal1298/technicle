<?php
 $assets = $this->config->item('assets');
 $base_url = $this->config->item('base_url');?>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui, maximum-scale=1">
    <meta name="description" content="Modern admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities with bitcoin dashboard.">
    <meta name="keywords" content="admin template, modern admin template, dashboard template, flat admin template, responsive admin template, web app, crypto dashboard, bitcoin dashboard">
    <meta name="author" content="PIXINVENT">
    <title><?php echo $view_page_title; ?> - Admin</title>
    <link rel="apple-touch-icon" href="<?php echo config_item("favicon_large"); ?>">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo config_item("favicon"); ?>">
    <link href="<?php echo config_item("assets"); ?>css/line-awesome/css/line-awesome.min.css" rel="stylesheet">
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

<body class="vertical-layout vertical-menu 2-columns menu-expanded fixed-navbar"
data-open="click" data-menu="vertical-menu" data-col="2-columns">
  <!-- fixed-top-->
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light bg-admin-color navbar-shadow">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <h2 class="sidebar-header">TechVoot</h2>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="javascript:void(0);"></a></li>
                    </ul>
                    <ul class="nav navbar-nav float-right">
						<?php
						$session = $this->session->userdata('admin');?>
                        <li class="dropdown dropdown-user nav-item">
                            <a class="dropdown-toggle nav-link dropdown-user-link" href="javascript:void(0);" data-toggle="dropdown">
                                <span class="mr-1">Hello,
                                    <span id="admin_name" class="user-name text-bold-700"><?php  echo $session ["full_name"]; ?></span>
                                </span>
                                <span class="avatar avatar-online">
                                <?php
                                if(isset($session["profile_pic"]) && $session["profile_pic"] != '')
                                {
                                ?>
                                <img src="<?php echo isset($session["profile_pic"])?$session["profile_pic"]:''; ?>" id="admin_image" alt="avatar" /><i></i>
                                <?php } ?></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <!-- <a class="dropdown-item" href="<?php echo $base_url."admin/my-account"; ?>"><i class="ft-user"></i>My Account</a>
                                <a class="dropdown-item" href="<?php echo $base_url."admin/change-password"; ?>"><i class="ft-lock"></i>Change Password</a>
								<?php     if(isset($session ["role"]) && $session ["role"] == "admin"){ ?>
                                <a class="dropdown-item" href="<?php echo $base_url."admin/site-settings"; ?>"><i class="las la-cog"></i>Site Settings</a>
								<?php    } ?>
                                <div class="dropdown-divider"></div> -->
                                <a class="dropdown-item" href="<?php echo $base_url."admin/logout"; ?>"><i class="ft-power"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
	<div class="admin_alert">
		<div class="alert alert-success alert-dismissible" role="alert" data-animation="flipInY" style="display: <?php if($this->session->flashdata("message_success") != "") {echo "block";} else {echo "none";} ?>;">
			<strong class="alert_success">
				<?php if($this->session->flashdata("message_success") != "") {echo $this->session->flashdata("message_success");unset($_SESSION["message_success"]);} ?>
			</strong>
		</div>
		<div class="alert alert-warning alert-dismissible" role="alert" data-animation="slideInUp" style="display: <?php if($this->session->flashdata("message_warning") != "") {echo "block";} else {echo "none";} ?>;">
			<strong class="alert_warning">
				<?php if($this->session->flashdata("message_warning") != "") {echo $this->session->flashdata("message_warning");unset($_SESSION["message_warning"]);} ?>
			</strong>
		</div>
		<div class="alert alert-danger alert-dismissible" role="alert" data-animation="bounceIn" style="display: <?php if($this->session->flashdata("message") != "") {echo "block";} else {echo "none";} ?>;">
			<strong class="alert_danger">
				<?php if($this->session->flashdata("message") != "") {echo $this->session->flashdata("message");unset($_SESSION["message"]);} ?>
			</strong>
		</div>
	</div>
