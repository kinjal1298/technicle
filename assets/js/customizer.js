/*=========================================================================================
  File Name: customizer.js
  Description: Template customizer js.
  ----------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function(window, document, jQuery) {
    'use strict';

    /********************************
    *           Customizer          *
    ********************************/
    // Customizer toggle & close button click events  [Remove customizer code from production]
    jQuery('.customizer-toggle').on('click',function(){
        jQuery('.customizer').toggleClass('open');
    });
    jQuery('.customizer-close').on('click',function(){
        jQuery('.customizer').removeClass('open');
    });
    if(jQuery('.customizer-content').length > 0){
        jQuery('.customizer-content').perfectScrollbar({
            theme:"dark"
        });
    }

    /************************************
    *           Layout Options          *
    ************************************/
    var body = jQuery('body'),
    header_navbar      = jQuery('nav.header-navbar'),
    horz_header_navbar = jQuery('div.header-navbar'),
    footer             = jQuery('footer'),
    menu               = jQuery('.main-menu'),
    menu_type          = body.data('menu'),
    horz_layout        = false,
    semiLight          = false,
    semiDark           = false;

    if(header_navbar.hasClass('navbar-semi-light')){
        semiLight = true;
    }
    if(header_navbar.hasClass('navbar-semi-dark')){
        semiDark = true;
    }    

    if(menu_type == 'horizontal-menu'){
        horz_layout = true;
        jQuery('.layout-options .navbar').parent('.nav-item').attr('style','display: none !important');
        jQuery('.color-options .nav-semi-light').parent('.nav-item').attr('style','display: none !important');
        jQuery('.color-options .nav-semi-dark').parent('.nav-item').attr('style','display: none !important');
        jQuery('#native-scroll').parent('.custom-checkbox').attr('style','display: none !important');
        jQuery('#bordered-navigation').parent('.custom-checkbox').attr('style','display: none !important');
        jQuery('#collapsible-navigation').parent('.custom-checkbox').attr('style','display: none !important');
        jQuery('#static-navigation').parent('.custom-checkbox').attr('style','display: none !important');
        jQuery('#flipped-navigation').parent('.custom-checkbox').attr('style','display: none !important');
        
        jQuery('.color-options li:eq(3) a').tab('show');
    }

    if(menu_type === 'vertical-compact-menu' || menu_type === 'vertical-content-menu' || menu_type === 'vertical-overlay-menu'){
        jQuery('.color-options a#color-opt-3').tab('show');
        if( menu_type === 'vertical-content-menu' ){
            jQuery('.color-options a#color-opt-4').tab('show');
        }
        if( menu_type === 'vertical-compact-menu' || menu_type === 'vertical-overlay-menu' ){
            jQuery('#boxed-layout').parent('.custom-checkbox').attr('style','display: none !important');
        }
        jQuery('.color-options .nav-semi-light').parent('.nav-item').attr('style','display: none !important');
        jQuery('.color-options .nav-semi-dark').parent('.nav-item').attr('style','display: none !important');
    }
    
    // Layouts

    // If overlay menu template then collapsed sidebar should be checked by default
    if(menu_type === 'vertical-overlay-menu'){
        jQuery('#collapsed-sidebar').prop('checked', true);
        jQuery('#static-layout').parent('.custom-checkbox').attr('style','display: none !important');
        jQuery('#static-navigation').parent('.custom-checkbox').attr('style','display: none !important');
    }

    jQuery('#collapsed-sidebar').on('click',function(){

        // Toggle menu
        jQuery.app.menu.toggle();

        setTimeout(function(){
            jQuery(window).trigger( "resize" );
        },100);
    });
    jQuery('#fixed-layout').on('click',function(){
        if(jQuery('#boxed-layout').prop('checked') === true){
            jQuery('#boxed-layout').trigger('click');
        }
        if( jQuery(this).prop('checked') === true ){
            if( !body.hasClass('fixed-navbar') && horz_layout === false ){
                body.addClass('fixed-navbar');
            }
            if( !header_navbar.hasClass('fixed-top') && horz_layout === false ){
                header_navbar.addClass('fixed-top');
            }
            if( !footer.hasClass('navbar-fixed-bottom')){
                footer.addClass('navbar-fixed-bottom');
            }
            if( !horz_header_navbar.hasClass('navbar-fixed') && horz_layout === true){
                horz_header_navbar.addClass('navbar-fixed');
            }
            header_navbar.removeClass('navbar-static-top');
            horz_header_navbar.removeClass('navbar-static');
            menu.removeClass('menu-static');
            footer.removeClass('footer-static');
        }
        else{
            footer.removeClass('navbar-fixed-bottom');
        }
    });

    jQuery('#boxed-layout').on('click',function(){
        if(jQuery('#fixed-layout').prop('checked') === true){
            jQuery('#fixed-layout').trigger('click');
        }
        if( jQuery(this).prop('checked') === true ){
            if( !body.hasClass('container boxed-layout') ){
                body.addClass('container boxed-layout');
            }
            if( !header_navbar.hasClass('container boxed-layout') ){
                header_navbar.addClass('container boxed-layout');
            }
            header_navbar.removeClass('navbar-static-top');
            menu.removeClass('menu-static');
            footer.removeClass('footer-static');
        }
        else{
            body.removeClass('container boxed-layout');
            header_navbar.removeClass('container boxed-layout');
        }
    });

    jQuery('#static-layout').on('click',function(){
        if( jQuery(this).prop('checked') === true ){
            if( !header_navbar.hasClass('navbar-static-top') ){
                header_navbar.addClass('navbar-static-top');
            }
            if( !menu.hasClass('menu-static') ){
                menu.addClass('menu-static');
            }
            if( !footer.hasClass('footer-static')){
                footer.addClass('footer-static');
            }
            if(horz_layout === true){
                horz_header_navbar.unstick();
                horz_header_navbar.addClass('navbar-static');
            }
            body.removeClass('fixed-navbar');
            header_navbar.removeClass('fixed-top');
            horz_header_navbar.removeClass('menu-fixed');
            menu.removeClass('menu-fixed');
            footer.removeClass('navbar-fixed-bottom');
            jQuery.app.menu.manualScroller.disable();
        }
        else{
            if(horz_layout === false){
                body.addClass('fixed-navbar');
                menu.removeClass('navbar-static').addClass('menu-fixed');
                header_navbar.removeClass('navbar-static-top').addClass('fixed-top');
            }
            if(horz_layout === true){
                horz_header_navbar.sticky();
                horz_header_navbar.removeClass('navbar-static').addClass('navbar-fixed');
            }
            footer.removeClass('footer-static');
            jQuery.app.menu.manualScroller.enable();
        }
    });

    // Navbar
    if(menu_type === 'vertical-overlay-menu'){
        jQuery('#brand-center').prop('checked',true);
    }
    jQuery('#brand-center').on('click',function(){
        if(!header_navbar.hasClass('navbar-brand-center')){
            if(semiLight == true){
                header_navbar.removeClass('navbar-semi-light');
            }
            if(semiDark == true){
                header_navbar.removeClass('navbar-semi-dark');
            }
            header_navbar.addClass('navbar-dark navbar-brand-center');
            changeLogo('light');
        }
        else{
            if(semiLight == true){
                header_navbar.removeClass('navbar-dark navbar-brand-center');
                changeLogo('dark');
                header_navbar.addClass('navbar-semi-light');
            }
            if(semiDark == true){
                header_navbar.removeClass('navbar-dark navbar-brand-center');
                changeLogo('light');
                header_navbar.addClass('navbar-semi-dark');
            }
        }
    });
    jQuery('#navbar-static-top').on('click',function(){
        if( jQuery(this).prop('checked') === true ){
            if( !header_navbar.hasClass('navbar-static-top') ){
                header_navbar.addClass('navbar-static-top');
            }
            if( !menu.hasClass('menu-static') ){
                menu.addClass('menu-static');
            }
            if( !footer.hasClass('footer-static')){
                footer.addClass('footer-static');
            }
            body.removeClass('fixed-navbar');
            header_navbar.removeClass('fixed-top');
            menu.removeClass('menu-fixed');
            footer.removeClass('navbar-fixed-bottom');
            jQuery.app.menu.manualScroller.disable();
        }
        else{
            body.addClass('fixed-navbar');
            header_navbar.removeClass('navbar-static-top').addClass('fixed-top');
            menu.removeClass('menu-static').addClass('menu-fixed');
            footer.removeClass('footer-static');
            jQuery.app.menu.manualScroller.enable();
        }
    });


    // Navigation
    jQuery('#native-scroll').on('click',function(){
        if(jQuery('#static-navigation').prop('checked') === true){
            menu.removeClass('menu-static').addClass('menu-fixed');
            jQuery('#static-navigation').attr('checked',false);
        }
        if(!menu.hasClass('menu-native-scroll')){
            menu.addClass('menu-native-scroll');
            jQuery.app.menu.manualScroller.disable();
        }
        else{
            menu.removeClass('menu-native-scroll');
            jQuery.app.menu.manualScroller.enable();
        }
    });
    jQuery('#right-side-icons').on('click',function(){
        if(!menu.hasClass('menu-icon-right')){
            menu.addClass('menu-icon-right');
        }
        else{
            menu.removeClass('menu-icon-right');
        }

        if(horz_layout === true){
            if(!horz_header_navbar.hasClass('navbar-icon-right')){
                horz_header_navbar.addClass('navbar-icon-right');
            }
            else{
                horz_header_navbar.removeClass('navbar-icon-right');
            }
        }
    });
    jQuery('#bordered-navigation').on('click',function(){
        if(!menu.hasClass('menu-bordered')){
            menu.addClass('menu-bordered');
        }
        else{
            menu.removeClass('menu-bordered');
        }
    });
    jQuery('#flipped-navigation').on('click',function(){
        if(!body.hasClass('menu-flipped')){
            body.addClass('menu-flipped');
            jQuery('.customizer-close').trigger('click');
        }
        else{
            body.removeClass('menu-flipped');
        }

        if(horz_layout === true){
            if(!horz_header_navbar.hasClass('navbar-flipped')){
                horz_header_navbar.addClass('navbar-flipped');
            }
            else{
                horz_header_navbar.removeClass('navbar-flipped');
            }
        }
    });
    jQuery('#collapsible-navigation').on('click',function(){
        if(!menu.hasClass('menu-collapsible')){
            menu.addClass('menu-collapsible');
        }
        else{
            menu.removeClass('menu-collapsible');
        }
    });
    jQuery('#static-navigation').on('click',function(){
        if(jQuery('#native-scroll').prop('checked') === true){
            menu.removeClass('menu-native-scroll');
            jQuery('#native-scroll').attr('checked',false);
        }
        if(!menu.hasClass('menu-static')){
            menu.addClass('menu-static').removeClass('menu-fixed');
            jQuery.app.menu.manualScroller.disable();
        }
        else{
            menu.removeClass('menu-static').addClass('menu-fixed');
            jQuery.app.menu.manualScroller.enable();
        }
    });



    /****************************************
    *           Change menu bg color        *
    ****************************************/
    if(jQuery('.main-menu').hasClass('menu-dark')){
        jQuery('.customizer-sidebar-options').find('[data-sidebar="menu-dark"]').addClass('active').siblings('btn').removeClass('active');
    }
    else{
        jQuery('.customizer-sidebar-options').find('[data-sidebar="menu-light"]').addClass('active').siblings('btn').removeClass('active');
    }

    jQuery('.customizer-sidebar-options .btn').on('click',function(){
        var jQuerythis= jQuery(this),
        sidebarColor = jQuerythis.attr('data-sidebar');
        jQuerythis.addClass('active').siblings('.btn').removeClass('active');
        jQuery('.main-menu').removeClass('menu-dark menu-light').addClass(sidebarColor);
        if(horz_layout === true){
            horz_header_navbar.removeClass('navbar-dark navbar-light');
            if(sidebarColor == 'menu-light'){
                horz_header_navbar.addClass('navbar-light');
            }
            else{
                horz_header_navbar.addClass('navbar-dark');
            }
        }
    });


    /*********************************
    *           Color Options        *
    *********************************/

    var el = jQuery('nav.header-navbar'),
    nav_type = 'navbar-semi-light',
    bgClass = '';
    if(el.attr('class').match(/\bbg-\S+/g)){
        bgClass = el.attr('class').match(/\bbg-\S+/g)[0];
    }

    // Nav Semi Light
    jQuery('.nav-semi-light').on('click',function(){
        chkBgClass(el);
        changeLogo('dark');
        resetBgClass(el);
        addBgClass(el,'navbar-semi-light bg-gradient-x-grey-blue');
        jQuery('input[name=nav-slight-clr].default').prop('checked', true);
        semiLight = true;
        semiDark = false;
    });
    jQuery("input[name='nav-slight-clr']").change(function(){
        // bgClass = el.attr('class').match(/\bbg-\S+/g)[0];
        if(semiDark == true){
            el.removeClass('navbar-semi-dark').addClass('navbar-semi-light');
        }
        bgClass = chkBgClass(el);
        el.removeClass(bgClass).addClass(jQuery(this).data('bg'));
    });

    // Nav Semi Dark
    jQuery('.nav-semi-dark').on('click',function(){
        chkBgClass(el);
        changeLogo('light');
        resetBgClass(el);
        addBgClass(el,'navbar-semi-dark navbar-shadow');
        jQuery('input[name=nav-sdark-clr].default').prop('checked', true);
        semiLight = false;
        semiDark = true;
    });
    jQuery("input[name='nav-sdark-clr']").change(function(){
        if(semiLight == true){
            el.removeClass('navbar-semi-light').addClass('navbar-semi-dark');
        }
        var el = jQuery('.navbar-header');
        var bgClass= chkBgClass(el);
        el.removeClass(bgClass).addClass(jQuery(this).data('bg'));
    });

    // Nav Dark
    jQuery('.nav-dark').on('click',function(){
        chkBgClass(el);
        changeLogo('light');
        resetBgClass(el);
        addBgClass(el, 'navbar-dark');
        jQuery('input[name=nav-dark-clr].default').prop('checked', true);
    });
    jQuery("input[name='nav-dark-clr']").change(function(){
        var bgClass= chkBgClass(el);
        el.removeClass(bgClass).addClass(jQuery(this).data('bg'));
    });

    // Nav Light
    jQuery('.nav-light').on('click',function(){
        chkBgClass(el);
        changeLogo('dark');
        resetBgClass(el);
        addBgClass(el, 'navbar-light navbar-shadow');
        jQuery('input[name=nav-light-clr].default').prop('checked', true);
    });
    jQuery("input[name='nav-light-clr']").change(function(){
        var bgClass= chkBgClass(el);
        el.removeClass(bgClass).addClass(jQuery(this).data('bg'));
    });

    function chkBgClass(elm){
        if(elm.attr('class').match(/\bbg-\S+/g)){
            bgClass = elm.attr('class').match(/\bbg-\S+/g);
            var classes = '';
            jQuery.map(bgClass,function(k,v){
                if(v === 0)
                    classes = k;
                else
                    classes = classes + ' ' + k;
            });
            bgClass = classes;
        }
        else
            bgClass = '';

        return bgClass;
    }

    function resetBgClass(elm){
        elm.removeClass('navbar-semi-dark navbar-semi-light navbar-light navbar-dark navbar-shadow '+ bgClass);
        var bgClassHeader = '';
        if(jQuery('.navbar-header').attr('class').match(/\bbg-\S+/g)){
            bgClassHeader = jQuery('.navbar-header').attr('class').match(/\bbg-\S+/g)[0];
        }
        jQuery('.navbar-header').removeClass(bgClassHeader);
    }

    function addBgClass(elm,classes){
        elm.addClass(classes);
    }

    function changeLogo(logo){
        if(logo == 'light'){
            jQuery('.brand-logo').attr('src','../../../app-assets/images/logo/logo.png');
        }
        else{
            jQuery('.brand-logo').attr('src','../../../app-assets/images/logo/logo.png');
        }
    }
})(window, document, jQuery);