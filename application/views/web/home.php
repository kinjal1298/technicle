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
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto smooth-scroll">
                        <li class="nav-item">
                            <a class="nav-link" href="#intro">Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" data-offset="90">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects" data-offset="90">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#gallery" data-offset="90">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#testimonials" data-offset="30">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#articles" data-offset="90">Articles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact" data-offset="90">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="<?php echo $base_url.'logout';?>" data-offset="90">Logout</a>
                        </li>
                    </ul>
                    <!-- Social Icon  -->
                    <ul class="navbar-nav nav-flex-icons">
                        <li class="nav-item">
                            <a class="nav-link">
                                <i class="fab fa-facebook light-green-text-2"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <i class="fab fa-twitter light-green-text-2"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <i class="fab fa-instagram light-green-text-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar -->
        <!-- Full Page Intro -->
        <div id="intro-section" class="view" style="overflow-x: hidden;">
            <!-- <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsinline
                autoplay muted loop>
                <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4">
            </video> -->
            <!-- Mask & flexbox options-->
            <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
                <!-- Content -->
                <div class="container px-md-3 px-sm-0">
                    <!--Grid row-->
                    <div class="row wow fadeIn">
                        <!--Grid column-->
                        <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
                            <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Creative Agency</h3>
                            <hr class="hr-light my-4 w-75">
                            <h4 class="subtext-header mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit deleniti consequuntur nihil.</h4>
                            <a href="#!" class="btn btn-rounded btn-outline-white">
                                <i class="fa fa-home"></i> Visit us
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

    <!--Main layout-->
    <main>

        <!--Section: about-->
        <section id="about" class="py-5">

            <!-- Container -->
            <div class="container">
                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold text-center mb-5">Why is it so great?</h2>
                <!-- Section description -->
                <p class="lead grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad
                    minim veniam.</p>

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-lg-5 text-center text-lg-left">
                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image">
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-lg-7">

                        <!-- Grid row -->
                        <div class="row mb-3">

                            <!-- Grid column -->
                            <div class="col-1">
                                <i class="fa fa-mail-forward fa-lg purple-text"></i>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-xl-10 col-md-11 col-10">
                                <h5 class="font-weight-bold mb-3">Safety</h5>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                                    minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                                    assumenda deleniti hic.</p>
                            </div>
                            <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row mb-3">

                            <!-- Grid column -->
                            <div class="col-1">
                                <i class="fa fa-mail-forward fa-lg purple-text"></i>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-xl-10 col-md-11 col-10">
                                <h5 class="font-weight-bold mb-3">Technology</h5>
                                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                                    minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                                    assumenda deleniti hic.</p>
                            </div>
                            <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!--Grid row-->
                        <div class="row">

                            <!-- Grid column -->
                            <div class="col-1">
                                <i class="fa fa-mail-forward fa-lg purple-text"></i>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-xl-10 col-md-11 col-10">
                                <h5 class="font-weight-bold mb-3">Finance</h5>
                                <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                                    ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
                                    assumenda deleniti hic.</p>
                            </div>
                            <!-- Grid column -->

                        </div>
                        <!--Grid row-->

                    </div>
                    <!--Grid column-->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Container -->

        </section>
        <!--Section: about-->

        <!--Section: projects-->
        <section id="projects" class="text-center py-5" style="background-color: #eee;">

            <!-- Container -->
            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold mb-5">Our best projects</h2>
                <!-- Section description -->
                <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

                <!-- Grid row -->
                <div class="row text-center">

                    <!-- Grid column -->
                    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
                        <!--Featured image-->
                        <div class="view overlay rounded z-depth-1">
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" class="img-fluid" alt="Sample project image">
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Excerpt-->
                        <div class="card-body pb-0">
                            <h4 class="font-weight-bold my-3">Title of the news</h4>
                            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                necessitatibus saepe eveniet ut et voluptates repudiandae.
                            </p>
                            <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
                        </div>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-lg-4 col-md-6 mb-md-0 mb-4">
                        <!--Featured image-->
                        <div class="view overlay rounded z-depth-1">
                            <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" class="img-fluid" alt="Sample project image">
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Excerpt-->
                        <div class="card-body pb-0">
                            <h4 class="font-weight-bold my-3">Title of the news</h4>
                            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                necessitatibus saepe eveniet ut et voluptates repudiandae.
                            </p>
                            <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
                        </div>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-lg-4 col-md-6">
                        <!--Featured image-->
                        <div class="view overlay rounded z-depth-1">
                            <img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" class="img-fluid" alt="Sample project image">
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Excerpt-->
                        <div class="card-body pb-0">
                            <h4 class="font-weight-bold my-3">Title of the news</h4>
                            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                necessitatibus saepe eveniet ut et voluptates repudiandae.
                            </p>
                            <a class="btn btn-purple btn-sm"><i class="fa fa-clone left"></i> View project</a>
                        </div>
                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Container -->

        </section>
        <!--Section: projects-->

        <!--Section: gallery-->
        <section id="gallery" class="text-center py-5">

            <!-- Container -->
            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold mb-5">Our best projects</h2>
                <!-- Section description -->
                <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

                <div class="row">
                    <div class="col-md-12">

                        <div id="mdb-lightbox-ui"></div>

                        <div class="mdb-lightbox">

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg"
                                        class="img-fluid z-depth-1-half">
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                            <figure class="col-md-4">
                                <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg"
                                    data-size="1600x1067">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg"
                                        class="img-fluid z-depth-1-half" />
                                </a>
                            </figure>

                        </div>

                    </div>
                </div>

            </div>
            <!-- Container -->

        </section>
        <!--Section: gallery-->

        <!--Section: testimonials-->
        <section id="testimonials" class="text-center py-5" style="background-color: #eee;">

            <!-- Container -->
            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold mb-5">Testimonials</h2>

                <!-- Carousel Wrapper -->
                <div id="carousel-example-1" class="carousel no-flex testimonial-carousel slide carousel-fade"
                    data-ride="carousel" data-interval="false">
                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <!--First slide-->
                        <div class="carousel-item active">
                            <div class="testimonial">
                                <!--Avatar-->
                                <div class="avatar mx-auto mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle img-fluid"
                                        alt="First sample avatar image">
                                </div>
                                <!--Content-->
                                <p>
                                    <i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet
                                    molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste
                                    impedit quidem dolor veniam.
                                </p>
                                <h4 class="font-weight-bold">Anna Deynah</h4>
                                <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                                <!--Review-->
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star-half-full amber-text"> </i>
                            </div>
                        </div>
                        <!--First slide-->
                        <!--Second slide-->
                        <div class="carousel-item">
                            <div class="testimonial">
                                <!--Avatar-->
                                <div class="avatar mx-auto mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" class="rounded-circle img-fluid"
                                        alt="Second sample avatar image">
                                </div>
                                <!--Content-->
                                <p>
                                    <i class="fa fa-quote-left"></i> Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                                    sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                    incidunt ut labore. </p>
                                <h4 class="font-weight-bold">Maria Kate</h4>
                                <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
                                <!--Review-->
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                            </div>
                        </div>
                        <!--Second slide-->
                        <!--Third slide-->
                        <div class="carousel-item">
                            <div class="testimonial">
                                <!--Avatar-->
                                <div class="avatar mx-auto mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle img-fluid"
                                        alt="Third sample avatar image">
                                </div>
                                <!--Content-->
                                <p>
                                    <i class="fa fa-quote-left"></i> Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium.</p>
                                <h4 class="font-weight-bold">John Doe</h4>
                                <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <!--Review-->
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star amber-text"> </i>
                                <i class="fa fa-star-o amber-text"> </i>
                            </div>
                        </div>
                        <!--Third slide-->
                    </div>
                    <!--Slides-->
                    <!--Controls-->
                    <a class="carousel-item-prev left carousel-control" href="#carousel-example-1" role="button"
                        data-slide="prev">
                        <span class="icon-prev" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-item-next right carousel-control" href="#carousel-example-1" role="button"
                        data-slide="next">
                        <span class="icon-next" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--Controls-->
                </div>
                <!-- Carousel Wrapper -->

            </div>
            <!-- Container -->

        </section>
        <!--Section: testimonials-->

        <!--Section: call to action-->
        <div class="streak streak-md streak-photo" style="background-image:url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg')">
            <div class="flex-center rgba-black-light pattern-1">
                <div class="white-text smooth-scroll mx-4">
                    <h2 class="h2-responsive mb-5 wow fadeIn">If you have any legal problem in your life ... We are
                        available</h2>
                    <div class="text-center">
                        <a href="#contact" class="btn btn-outline-white wow fadeIn " data-offset="100" data-wow-delay="0.2s">Contact
                            us</a>
                    </div>
                </div>
            </div>
        </div>
        <!--Section: call to action-->

        <!--Section: articles-->
        <section id="articles" class="text-center py-5">

            <!-- Container -->
            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold mb-5">Articles</h2>

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-lg-4 col-md-12 mb-4">

                        <!-- Card Narrower -->
                        <div class="card card-cascade narrower">

                            <!-- Card image -->
                            <div class="view view-cascade">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                    alt="Card image cap">
                                <a>
                                    <div class="mask img-gradient"></div>
                                </a>
                            </div>

                            <!-- Card content -->
                            <div class="card-body card-body-cascade">

                                <!-- Label -->
                                <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                                <!-- Title -->
                                <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                                <!-- Text -->
                                <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                <!-- Button -->
                                <a class="btn btn-unique">Button</a>

                            </div>

                        </div>
                        <!-- Card Narrower -->

                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-4 col-md-6 mb-4">

                        <!-- Card Narrower -->
                        <div class="card card-cascade narrower">

                            <!-- Card image -->
                            <div class="view view-cascade">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                    alt="Card image cap">
                                <a>
                                    <div class="mask img-gradient"></div>
                                </a>
                            </div>

                            <!-- Card content -->
                            <div class="card-body card-body-cascade">

                                <!-- Label -->
                                <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                                <!-- Title -->
                                <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                                <!-- Text -->
                                <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                <!-- Button -->
                                <a class="btn btn-unique">Button</a>

                            </div>

                        </div>
                        <!-- Card Narrower -->

                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-4 col-md-6 mb-4">

                        <!-- Card Narrower -->
                        <div class="card card-cascade narrower">

                            <!-- Card image -->
                            <div class="view view-cascade">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                                    alt="Card image cap">
                                <a>
                                    <div class="mask img-gradient"></div>
                                </a>
                            </div>

                            <!-- Card content -->
                            <div class="card-body card-body-cascade">

                                <!-- Label -->
                                <h5 class="pink-text pb-2 pt-1"><i class="fa fa-cutlery"></i> Culinary</h5>
                                <!-- Title -->
                                <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                                <!-- Text -->
                                <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                                <!-- Button -->
                                <a class="btn btn-unique">Button</a>

                            </div>

                        </div>
                        <!-- Card Narrower -->

                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

            </div>
            <!-- Container -->

        </section>
        <!--Section: articles-->

        <!--Section: contact-->
        <section id="contact" class="py-5" style="background-color: #eee;">

            <div class="container">

                <!-- Section heading -->
                <h2 class="h1-responsive font-weight-bold text-center mb-5">Contact us</h2>
                <!-- Section description -->
                <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-md-9 mb-md-0 mb-5">

                    <form>

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-name" class="form-control">
                            <label for="contact-name" class="">Your name</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-email" class="form-control">
                            <label for="contact-email" class="">Your email</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                            <input type="text" id="contact-Subject" class="form-control">
                            <label for="contact-Subject" class="">Subject</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row">

                        <!-- Grid column -->
                        <div class="col-md-12">
                            <div class="md-form">
                            <textarea type="text" id="contact-message" class="form-control md-textarea" rows="3"></textarea>
                            <label for="contact-message">Your message</label>
                            </div>
                        </div>
                        <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                    </form>

                    <div class="text-center text-md-left">
                        <a class="btn btn-purple btn-md">Send</a>
                    </div>

                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li>
                        <i class="fa fa-map-marker fa-2x purple-text"></i>
                        <p>San Francisco, CA 94126, USA</p>
                        </li>
                        <li>
                        <i class="fa fa-phone fa-2x mt-4 purple-text"></i>
                        <p>+ 01 234 567 89</p>
                        </li>
                        <li>
                        <i class="fa fa-envelope fa-2x mt-4 purple-text"></i>
                        <p class="mb-0">contact@example.com</p>
                        </li>
                    </ul>
                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>

        </section>
        <!--Section: contact-->

    </main>
    <!--Main layout-->

    <!-- Footer -->
    <footer class="page-footer font-small pt-4">

        <!-- Footer Elements -->
        <div class="container">
    
        <!-- Social buttons -->
        <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
                <i class="fab fa-facebook"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
                <i class="fab fa-twitter"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
                <i class="fab fa-google-plus"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
                <i class="fab fa-linkedin"> </i>
            </a>
            </li>
            <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
                <i class="fab fa-dribbble"> </i>
            </a>
            </li>
        </ul>
        <!-- Social buttons -->
    
        </div>
        <!-- Footer Elements -->
    
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
        
      </footer>
      <!-- Footer -->
</body>
</html>
