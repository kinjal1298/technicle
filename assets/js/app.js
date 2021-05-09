/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function(window, document, jQuery) {
    'use strict';
    var jQueryhtml = jQuery('html');
    var jQuerybody = jQuery('body');


    jQuery(window).on('load',function(){
        var rtl;
        var compactMenu = false; // Set it to true, if you want default menu to be compact

        if(jQuery('html').data('textdirection') == 'rtl'){
            rtl = true;
        }

        setTimeout(function(){
            jQueryhtml.removeClass('loading').addClass('loaded');
        }, 1200);

        jQuery.app.menu.init(compactMenu);

        // Navigation configurations
        var config = {
            speed: 300 // set speed to expand / collpase menu
        };
        if(jQuery.app.nav.initialized === false){
            jQuery.app.nav.init(config);
        }

        Unison.on('change', function(bp) {
            jQuery.app.menu.change();
        });

        // Tooltip Initialization
        jQuery('[data-toggle="tooltip"]').tooltip({
            container:'body'
        });

        // Top Navbars - Hide on Scroll
        if (jQuery(".navbar-hide-on-scroll").length > 0) {
            jQuery(".navbar-hide-on-scroll.fixed-top").headroom({
              "offset": 205,
              "tolerance": 5,
              "classes": {
                 // when element is initialised
                initial : "headroom",
                // when scrolling up
                pinned : "headroom--pinned-top",
                // when scrolling down
                unpinned : "headroom--unpinned-top",
              }
            });
            // Bottom Navbars - Hide on Scroll
            jQuery(".navbar-hide-on-scroll.fixed-bottom").headroom({
              "offset": 205,
              "tolerance": 5,
              "classes": {
                 // when element is initialised
                initial : "headroom",
                // when scrolling up
                pinned : "headroom--pinned-bottom",
                // when scrolling down
                unpinned : "headroom--unpinned-bottom",
              }
            });
        }

        //Match content & menu height for content menu
        setTimeout(function(){
            if(jQuery('body').hasClass('vertical-content-menu')){
                setContentMenuHeight();
            }
        },500);
        function setContentMenuHeight(){
            var menuHeight = jQuery('.main-menu').height();
            var bodyHeight = jQuery('.content-body').height();
            if(bodyHeight<menuHeight){
                jQuery('.content-body').css('height',menuHeight);
            }
        }

        // Collapsible Card
        jQuery('a[data-action="collapse"]').on('click',function(e){
            e.preventDefault();
            jQuery(this).closest('.card').children('.card-content').collapse('toggle');
            jQuery(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ft-minus ft-plus');

        });

        // Toggle fullscreen
        jQuery('a[data-action="expand"]').on('click',function(e){
            e.preventDefault();
            jQuery(this).closest('.card').find('[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
            jQuery(this).closest('.card').toggleClass('card-fullscreen');
        });

        //  Notifications & messages scrollable
        if(jQuery('.scrollable-container').length > 0){
            jQuery('.scrollable-container').perfectScrollbar({
                theme:"dark"
            });
        }

        // Reload Card
        jQuery('a[data-action="reload"]').on('click',function(){
            var block_ele = jQuery(this).closest('.card');

            // Block Element
            block_ele.block({
                message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
                timeout: 2000, //unblock after 2 seconds
                overlayCSS: {
                    backgroundColor: '#FFF',
                    cursor: 'wait',
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
        });

        // Close Card
        jQuery('a[data-action="close"]').on('click',function(){
            jQuery(this).closest('.card').removeClass().slideUp('fast');
        });

        // Match the height of each card in a row
        setTimeout(function(){
            jQuery('.row.match-height').each(function() {
                jQuery(this).find('.card').not('.card .card').matchHeight(); // Not .card .card prevents collapsible cards from taking height
            });
        },500);


        jQuery('.card .heading-elements a[data-action="collapse"]').on('click',function(){
            var jQuerythis = jQuery(this),
            card = jQuerythis.closest('.card');
            var cardHeight;

            if(parseInt(card[0].style.height,10) > 0){
                cardHeight = card.css('height');
                card.css('height','').attr('data-height', cardHeight);
            }
            else{
                if(card.data('height')){
                    cardHeight = card.data('height');
                    card.css('height',cardHeight).attr('data-height', '');
                }
            }
        });

        // Add open class to parent list item if subitem is active except compact menu
        var menuType = jQuerybody.data('menu');
        if(menuType != 'vertical-compact-menu' && menuType != 'horizontal-menu' && compactMenu === false ){
            if( jQuerybody.data('menu') == 'vertical-menu-modern' ){
                if( localStorage.getItem("menuLocked") === "true"){
                    jQuery(".main-menu-content").find('li.active').parents('li').addClass('open');
                }
            }
            else{
                jQuery(".main-menu-content").find('li.active').parents('li').addClass('open');
            }
        }
        if(menuType == 'vertical-compact-menu' || menuType == 'horizontal-menu'){
            jQuery(".main-menu-content").find('li.active').parents('li:not(.nav-item)').addClass('open');
            jQuery(".main-menu-content").find('li.active').parents('li').addClass('active');
        }

        //card heading actions buttons small screen support
        jQuery(".heading-elements-toggle").on("click",function(){
            jQuery(this).parent().children(".heading-elements").toggleClass("visible");
        });

        //  Dynamic height for the chartjs div for the chart animations to work
        var chartjsDiv = jQuery('.chartjs'),
        canvasHeight = chartjsDiv.children('canvas').attr('height');
        chartjsDiv.css('height', canvasHeight);

        if(jQuerybody.hasClass('boxed-layout')){
            if(jQuerybody.hasClass('vertical-overlay-menu') || jQuerybody.hasClass('vertical-compact-menu')){
               var menuWidth= jQuery('.main-menu').width();
               var contentPosition = jQuery('.app-content').position().left;
               var menuPositionAdjust = contentPosition-menuWidth;
               if(jQuerybody.hasClass('menu-flipped')){
                    jQuery('.main-menu').css('right',menuPositionAdjust+'px');
               }else{
                    jQuery('.main-menu').css('left',menuPositionAdjust+'px');
               }
            }
        }

        jQuery('.nav-link-search').on('click',function(){
            var jQuerythis = jQuery(this),
            searchInput = jQuery(this).siblings('.search-input');

            if(searchInput.hasClass('open')){
                searchInput.removeClass('open');
            }
            else{
                searchInput.addClass('open');
            }
        });
    });


    jQuery(document).on('click', '.menu-toggle, .modern-nav-toggle', function(e) {
        e.preventDefault();

        // Toggle menu
        jQuery.app.menu.toggle();

        setTimeout(function(){
            jQuery(window).trigger( "resize" );
        },200);

        if(jQuery('#collapsed-sidebar').length > 0){
            setTimeout(function(){
                if(jQuerybody.hasClass('menu-expanded') || jQuerybody.hasClass('menu-open')){
                    jQuery('#collapsed-sidebar').prop('checked', false);
                }
                else{
                    jQuery('#collapsed-sidebar').prop('checked', true);
                }
            },1000);
        }

        return false;
    });

    /*jQuery('.modern-nav-toggle').on('click',function(){
        var jQuerythis = jQuery(this),
        icon = jQuerythis.find('.toggle-icon').attr('data-ticon');

        if(icon == 'ft-toggle-right'){
            jQuerythis.find('.toggle-icon').attr('data-ticon','ft-toggle-left')
            .removeClass('ft-toggle-right').addClass('ft-toggle-left');
        }
        else{
            jQuerythis.find('.toggle-icon').attr('data-ticon','ft-toggle-right')
            .removeClass('ft-toggle-left').addClass('ft-toggle-right');
        }

        jQuery.app.menu.toggle();
    });*/

    jQuery(document).on('click', '.open-navbar-container', function(e) {

        var currentBreakpoint = Unison.fetch.now();

        // Init drilldown on small screen
        jQuery.app.menu.drillDownMenu(currentBreakpoint.name);

        // return false;
    });

    jQuery(document).on('click', '.main-menu-footer .footer-toggle', function(e) {
        e.preventDefault();
        jQuery(this).find('i').toggleClass('pe-is-i-angle-down pe-is-i-angle-up');
        jQuery('.main-menu-footer').toggleClass('footer-close footer-open');
        return false;
    });

    // Add Children Class
    jQuery('.navigation').find('li').has('ul').addClass('has-sub');

    jQuery('.carousel').carousel({
      interval: 2000
    });

    // Page full screen
    jQuery('.nav-link-expand').on('click', function(e) {
        if (typeof screenfull != 'undefined'){
            if (screenfull.enabled) {
                screenfull.toggle();
            }
        }
    });
    if (typeof screenfull != 'undefined'){
        if (screenfull.enabled) {
            jQuery(document).on(screenfull.raw.fullscreenchange, function(){
                if(screenfull.isFullscreen){
                    jQuery('.nav-link-expand').find('i').toggleClass('ft-minimize ft-maximize');
                }
                else{
                    jQuery('.nav-link-expand').find('i').toggleClass('ft-maximize ft-minimize');
                }
            });
        }
    }

    jQuery(document).on('click', '.mega-dropdown-menu', function(e) {
        e.stopPropagation();
    });

    jQuery(document).ready(function(){

        /**********************************
        *   Form Wizard Step Icon
        **********************************/
        jQuery('.step-icon').each(function(){
            var jQuerythis = jQuery(this);
            if(jQuerythis.siblings('span.step').length > 0){
                jQuerythis.siblings('span.step').empty();
                jQuery(this).appendTo(jQuery(this).siblings('span.step'));
            }
        });
    });

    // Update manual scroller when window is resized
    jQuery(window).resize(function() {
        jQuery.app.menu.manualScroller.updateHeight();
    });

    // TODO : Tabs dropdown fix, remove this code once fixed in bootstrap 4.
    jQuery('.nav.nav-tabs a.dropdown-item').on('click',function(){
        var jQuerythis = jQuery(this),
        href = jQuerythis.attr('href');
        var tabs = jQuerythis.closest('.nav');
        tabs.find('.nav-link').removeClass('active');
        jQuerythis.closest('.nav-item').find('.nav-link').addClass('active');
        jQuerythis.closest('.dropdown-menu').find('.dropdown-item').removeClass('active');
        jQuerythis.addClass('active');
        tabs.next().find(href).siblings('.tab-pane').removeClass('active in').attr('aria-expanded',false);
        jQuery(href).addClass('active in').attr('aria-expanded','true');
    });

    jQuery('#sidebar-page-navigation').on('click', 'a.nav-link', function(e){
        e.preventDefault();
        e.stopPropagation();
        var jQuerythis = jQuery(this),
        href= jQuerythis.attr('href');
        var offset = jQuery(href).offset();
        var scrollto = offset.top - 80; // minus fixed header height
        jQuery('html, body').animate({scrollTop:scrollto}, 0);
        setTimeout(function(){
            jQuerythis.parent('.nav-item').siblings('.nav-item').children('.nav-link').removeClass('active');
            jQuerythis.addClass('active');
        }, 100);
    });
})(window, document, jQuery);

/* jQuery(document).bind("contextmenu",function(e) {
	e.preventDefault();
});

jQuery(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
}); */