/*=========================================================================================
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Version: 1.0
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, jQuery) {
  'use strict';

  jQuery.app = jQuery.app || {};

  var jQuerybody       = jQuery('body');
  var jQuerywindow     = jQuery( window );
  var menuWrapper_el = jQuery('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = jQuery('div[data-menu="menu-wrapper"]').attr('class');

  // Main menu
  jQuery.app.menu = {
    expanded: null,
    collapsed: null,
    hidden : null,
    container: null,
    horizontalMenu: false,

    manualScroller: {
      obj: null,

      init: function() {
        var scroll_theme = (jQuery('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';
        this.obj = jQuery(".main-menu-content").perfectScrollbar({
          suppressScrollX: true,
          theme: scroll_theme
        });
      },

      update: function() {
        if (this.obj) {
          // Scroll to currently active menu on page load if data-scroll-to-active is true
          if(jQuery('.main-menu').data('scroll-to-active') === true){
              var position;
              if( jQuery(".main-menu-content").find('li.active').parents('li').length > 0 ){
                position = jQuery(".main-menu-content").find('li.active').parents('li').last().position();
              }
              else{
                position = jQuery(".main-menu-content").find('li.active').position();
              }
              setTimeout(function(){
                // jQuery.app.menu.container.scrollTop(position.top);
                if(position !== undefined){
                  jQuery.app.menu.container.stop().animate({scrollTop:position.top}, 300);
                }
                jQuery('.main-menu').data('scroll-to-active', 'false');
              },300);
          }
          jQuery(".main-menu-content").perfectScrollbar('update');
        }
      },

      enable: function() {
        this.init();
      },

      disable: function() {
        if (this.obj) {
          jQuery('.main-menu-content').perfectScrollbar('destroy');
        }
      },

      updateHeight: function(){
        if( (jQuerybody.data('menu') == 'vertical-menu' || jQuerybody.data('menu') == 'vertical-menu-modern' || jQuerybody.data('menu') == 'vertical-overlay-menu' ) && jQuery('.main-menu').hasClass('menu-fixed')){
          jQuery('.main-menu-content').css('height', jQuery(window).height() - jQuery('.header-navbar').height() - jQuery('.main-menu-header').outerHeight() - jQuery('.main-menu-footer').outerHeight() );
          this.update();
        }
      }
    },

    init: function(compactMenu) {
      if(jQuery('.main-menu-content').length > 0){
        this.container = jQuery('.main-menu-content');

        var menuObj = this;
        var defMenu = '';

        if(compactMenu === true){
          defMenu = 'collapsed';
        }

        if(jQuerybody.data('menu') == 'vertical-menu-modern') {
          var menuToggle = '';

          if (typeof(Storage) !== "undefined") {
            menuToggle = localStorage.getItem("menuLocked");
          }
          if(menuToggle === "false"){
            this.change('collapsed');
          }
          else{
            this.change();
          }
        }
        else{
          this.change(defMenu);
        }
      }
      else{
        // For 1 column layout menu won't be initialized so initiate drill down for mega menu

        // Drill down menu
        // ------------------------------
        this.drillDownMenu();
      }

      /*if(defMenu === 'collapsed'){
        this.collapse();
      }*/
    },

    drillDownMenu: function(screenSize){
      if(jQuery('.drilldown-menu').length){
        if(screenSize == 'sm' || screenSize == 'xs'){
          if(jQuery('#navbar-mobile').attr('aria-expanded') == 'true'){

            jQuery('.drilldown-menu').slidingMenu({
              backLabel:true
            });
          }
        }
        else{
          jQuery('.drilldown-menu').slidingMenu({
            backLabel:true
          });
        }
      }
    },

    change: function(defMenu) {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();

      var menuType = jQuerybody.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
          case 'lg':
            if(menuType === 'vertical-overlay-menu'){
              this.hide();
            }
            else if(menuType === 'vertical-compact-menu'){
              this.open();
            }
            else if(menuType === 'horizontal-menu' && currentBreakpoint.name == 'lg'){
              this.collapse();
            }
            else{
              if(defMenu === 'collapsed')
                this.collapse(defMenu);
              else
                this.expand();
            }
            break;
          case 'md':
            if(menuType === 'vertical-overlay-menu'){
              this.hide();
            }
            else if(menuType === 'vertical-compact-menu'){
              this.open();
            }
            else{
              this.collapse();
            }
            break;
          case 'sm':
            this.hide();
            break;
          case 'xs':
            this.hide();
            break;
        }
      }

      // On the small and extra small screen make them overlay menu
      if(menuType === 'vertical-menu' || menuType === 'vertical-compact-menu' || menuType === 'vertical-content-menu' || menuType === 'vertical-menu-modern'){
        this.toOverlayMenu(currentBreakpoint.name);
      }

      if(jQuerybody.is('.horizontal-layout') && !jQuerybody.hasClass('.horizontal-menu-demo')){
        this.changeMenu(currentBreakpoint.name);

        jQuery('.menu-toggle').removeClass('is-active');
      }

      // Initialize drill down menu for vertical layouts, for horizontal layouts drilldown menu is intitialized in changemenu function
      if(menuType != 'horizontal-menu'){
        // Drill down menu
        // ------------------------------
        this.drillDownMenu(currentBreakpoint.name);
      }

      // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------
      if(currentBreakpoint.name == 'xl'){
        jQuery('body[data-open="hover"] .dropdown').on('mouseenter', function(){
          if (!(jQuery(this).hasClass('show'))) {
            jQuery(this).addClass('show');
          }else{
            jQuery(this).removeClass('show');
          }
        }).on('mouseleave', function(event){
          jQuery(this).removeClass('show');
        });

        jQuery('body[data-open="hover"] .dropdown a').on('click', function(e){
          if(menuType == 'horizontal-menu'){
            var jQuerythis = jQuery(this);
            if(jQuerythis.hasClass('dropdown-toggle')){
              return false;
            }
          }
        });
      }

      // Added data attribute brand-center for navbar-brand-center
      // TODO:AJ: Shift this feature in PUG.
      if(jQuery('.header-navbar').hasClass('navbar-brand-center')){
        jQuery('.header-navbar').attr('data-nav','brand-center');
      }
      if(currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs'){
        jQuery('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      }else{
        jQuery('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      }

      // Dropdown submenu on small screen on click
      // --------------------------------------------------
      jQuery('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        if(jQuery(this).siblings('ul.dropdown-menu').length > 0){
          event.preventDefault();
        }
        event.stopPropagation();
        jQuery(this).parent().siblings().removeClass('show');
        jQuery(this).parent().toggleClass('show');
      });

      // Horizontal Fixed Nav Sticky hight issue on small screens
      if(menuType == 'horizontal-menu'){
        if(currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs'){
          if(jQuery(".menu-fixed").length){
            jQuery(".menu-fixed").unstick();
          }
        }
        else{
          if(jQuery(".navbar-fixed").length){
            jQuery(".navbar-fixed").sticky();
          }
        }
      }

      /********************************************
      *             Searchable Menu               *
      ********************************************/

      function searchMenu(list) {

        var input = jQuery(".menu-search");
        jQuery(input)
          .change( function () {
            var filter = jQuery(this).val();
            if(filter) {
              // Hide Main Navigation Headers
              jQuery('.navigation-header').hide();
              // this finds all links in a list that contain the input,
              // and hide the ones not containing the input while showing the ones that do
              jQuery(list).find("li a:not(:Contains(" + filter + "))").hide().parent().hide();
              // jQuery(list).find("li a:Contains(" + filter + ")").show().parents('li').show().addClass('open').closest('li').children('a').show();
              var searchFilter = jQuery(list).find("li a:Contains(" + filter + ")");
              if( searchFilter.parent().hasClass('has-sub') ){
                searchFilter.show()
                .parents('li').show()
                .addClass('open')
                .closest('li')
                .children('a').show()
                .children('li').show();

                // searchFilter.parents('li').find('li').show().children('a').show();
                if(searchFilter.siblings('ul').length > 0){
                  searchFilter.siblings('ul').children('li').show().children('a').show();
                }

              }
              else{
                searchFilter.show().parents('li').show().addClass('open').closest('li').children('a').show();
              }
            } else {
              // return to default
              jQuery('.navigation-header').show();
              jQuery(list).find("li a").show().parent().show().removeClass('open');
            }
            jQuery.app.menu.manualScroller.update();
            return false;
          })
        .keyup( function () {
            // fire the above change event after every letter
            jQuery(this).change();
        });
      }

      if(menuType === 'vertical-menu' || menuType === 'vertical-overlay-menu' || menuType === 'vertical-content-menu'){
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function(a,i,m){
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
        };

        searchMenu(jQuery("#main-menu-navigation"));
      }
    },

    /*changeLogo: function(menuType){
      var logo = jQuery('.brand-logo');
      var logoText = jQuery('.brand-text');
      if(menuType == 'expand'){
        // logo.attr('src',logo.data('expand'));
        logoText.delay(100).fadeIn(200);
        // logoText.addClass('d-inline-block').removeClass('d-none');
      }
      else{
        // logo.attr('src',logo.data('collapse'));
        logoText.fadeOut(100);
        // logoText.addClass('d-none').removeClass('d-inline-block');
      }
    },*/

    transit: function(callback1, callback2) {
      var menuObj = this;
      jQuerybody.addClass('changing-menu');

      callback1.call(menuObj);

      if(jQuerybody.hasClass('vertical-layout')){
        if(jQuerybody.hasClass('menu-open') || jQuerybody.hasClass('menu-expanded')){
          jQuery('.menu-toggle').addClass('is-active');

          // Show menu header search when menu is normally visible
          if( jQuerybody.data('menu') === 'vertical-menu' || jQuerybody.data('menu') === 'vertical-content-menu'){
            if(jQuery('.main-menu-header')){
              jQuery('.main-menu-header').show();
            }
          }
        }
        else{
          jQuery('.menu-toggle').removeClass('is-active');

          // Hide menu header search when only menu icons are visible
          if( jQuerybody.data('menu') === 'vertical-menu' || jQuerybody.data('menu') === 'vertical-content-menu'){
            if(jQuery('.main-menu-header')){
              jQuery('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function() {
        callback2.call(menuObj);
        jQuerybody.removeClass('changing-menu');

        menuObj.update();
      }, 500);
    },

    open: function() {
      this.transit(function() {
        jQuerybody.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;
      }, function() {
        if(!jQuery('.main-menu').hasClass('menu-native-scroll') && jQuery('.main-menu').hasClass('menu-fixed') ){
          this.manualScroller.enable();
          jQuery('.main-menu-content').css('height', jQuery(window).height() - jQuery('.header-navbar').height() - jQuery('.main-menu-header').outerHeight() - jQuery('.main-menu-footer').outerHeight() );
          // this.manualScroller.update();
        }
      });
    },

    hide: function() {

      this.transit(function() {
        jQuerybody.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;
      }, function() {
        if(!jQuery('.main-menu').hasClass('menu-native-scroll') && jQuery('.main-menu').hasClass('menu-fixed')){
          this.manualScroller.enable();
        }
      });
    },

    expand: function() {
      if (this.expanded === false) {
        if( jQuerybody.data('menu') == 'vertical-menu-modern' ){
          jQuery('.modern-nav-toggle').find('.toggle-icon')
          .removeClass('ft-toggle-left').addClass('ft-toggle-right');

          // Code for localStorage
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("menuLocked", "true");
          }
        }
        /*if( jQuerybody.data('menu') == 'vertical-menu' || jQuerybody.data('menu') == 'vertical-menu-modern'){
          this.changeLogo('expand');
        }*/
        this.transit(function() {
          jQuerybody.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;

        }, function() {

          if( (jQuery('.main-menu').hasClass('menu-native-scroll') || jQuerybody.data('menu') == 'horizontal-menu')){
            this.manualScroller.disable();
          }
          else{
            if(jQuery('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }

          if( (jQuerybody.data('menu') == 'vertical-menu' || jQuerybody.data('menu') == 'vertical-menu-modern') && jQuery('.main-menu').hasClass('menu-fixed')){
            jQuery('.main-menu-content').css('height', jQuery(window).height() - jQuery('.header-navbar').height() - jQuery('.main-menu-header').outerHeight() - jQuery('.main-menu-footer').outerHeight() );
            // this.manualScroller.update();
          }

        });
      }
    },

    collapse: function(defMenu) {
      if (this.collapsed === false) {
        if( jQuerybody.data('menu') == 'vertical-menu-modern' ){
          jQuery('.modern-nav-toggle').find('.toggle-icon')
          .removeClass('ft-toggle-right').addClass('ft-toggle-left');

          // Code for localStorage
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("menuLocked", "false");
          }
        }
        /*if( (jQuerybody.data('menu') == 'vertical-menu' ) || (jQuerybody.data('menu') == 'vertical-menu-modern' ) ){
          this.changeLogo('collapse');
        }*/
        this.transit(function() {
          jQuerybody.removeClass('menu-expanded').addClass('menu-collapsed');
          this.collapsed = true;
          this.expanded  = false;

        }, function() {

          if(jQuerybody.data('menu') == 'vertical-content-menu'){
            this.manualScroller.disable();
          }

          if( (jQuerybody.data('menu') == 'horizontal-menu') &&  jQuerybody.hasClass('vertical-overlay-menu')){
            if(jQuery('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }
          if( (jQuerybody.data('menu') == 'vertical-menu' || jQuerybody.data('menu') == 'vertical-menu-modern') && jQuery('.main-menu').hasClass('menu-fixed') ){
            jQuery('.main-menu-content').css('height', jQuery(window).height() - jQuery('.header-navbar').height());
            // this.manualScroller.update();
          }
          if( jQuerybody.data('menu') == 'vertical-menu-modern'){
            if(jQuery('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }
          /*if( jQuerybody.data('menu') == 'vertical-menu-modern' && defMenu === 'collapsed' ){
            var jQuerylistItem = jQuery('.main-menu li.open'),
            jQuerysubList = jQuerylistItem.children('ul');
            jQuerylistItem.addClass('menu-collapsed-open');

            jQuerysubList.show().slideUp(200, function() {
                jQuery(this).css('display', '');
            });

            jQuerylistItem.removeClass('open');
            // jQuery.app.menu.changeLogo();
          }*/
        });
      }
    },

    toOverlayMenu: function(screen){
      var menu = jQuerybody.data('menu');
      if(screen == 'sm' || screen == 'xs'){
        if(jQuerybody.hasClass(menu)){
          jQuerybody.removeClass(menu).addClass('vertical-overlay-menu');
        }
        if(menu == 'vertical-content-menu'){
          jQuery('.main-menu').addClass('menu-fixed');
        }
      }
      else{
        if(jQuerybody.hasClass('vertical-overlay-menu')){
          jQuerybody.removeClass('vertical-overlay-menu').addClass(menu);
        }
        if(menu == 'vertical-content-menu'){
          jQuery('.main-menu').removeClass('menu-fixed');
        }
      }
    },

    changeMenu: function(screen){
      // Replace menu html
      jQuery('div[data-menu="menu-wrapper"]').html('');
      jQuery('div[data-menu="menu-wrapper"]').html(menuWrapper_el);

      var menuWrapper    = jQuery('div[data-menu="menu-wrapper"]'),
      menuContainer      = jQuery('div[data-menu="menu-container"]'),
      menuNavigation     = jQuery('ul[data-menu="menu-navigation"]'),
      megaMenu           = jQuery('li[data-menu="megamenu"]'),
      megaMenuCol        = jQuery('li[data-mega-col]'),
      dropdownMenu       = jQuery('li[data-menu="dropdown"]'),
      dropdownSubMenu    = jQuery('li[data-menu="dropdown-submenu"]');

      if(screen == 'sm' || screen == 'xs'){

        // Change body classes
        jQuerybody.removeClass(jQuerybody.data('menu')).addClass('vertical-layout vertical-overlay-menu fixed-navbar');

        // Add navbar-fix-top class on small screens
        jQuery('nav.header-navbar').addClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass('main-menu menu-light menu-fixed menu-shadow');
        // menuContainer.removeClass().addClass('main-menu-content');
        menuNavigation.removeClass().addClass('navigation navigation-main');

        // If Mega Menu
        megaMenu.removeClass('dropdown mega-dropdown').addClass('has-sub');
        megaMenu.children('ul').removeClass();
        megaMenuCol.each(function(index, el) {

          // Remove drilldown-menu and menu list
          var megaMenuSub = jQuery(el).find('.mega-menu-sub');
          megaMenuSub.find('li').has('ul').addClass('has-sub');

          // if mega menu title is given, remove title and make it list item with mega menu title's text
          var first_child = jQuery(el).children().first(),
          first_child_text = '';

          if( first_child.is('h6') ){
            first_child_text = first_child.html();
            first_child.remove();
            jQuery(el).prepend('<a href="#">'+first_child_text+'</a>').addClass('has-sub mega-menu-title');
          }
        });
        megaMenu.find('a').removeClass('dropdown-toggle');
        megaMenu.find('a').removeClass('dropdown-item');

        // If Dropdown Menu
        dropdownMenu.removeClass('dropdown').addClass('has-sub');
        dropdownMenu.find('a').removeClass('dropdown-toggle nav-link');
        dropdownMenu.children('ul').find('a').removeClass('dropdown-item');
        dropdownMenu.find('ul').removeClass('dropdown-menu');
        dropdownSubMenu.removeClass().addClass('has-sub');

        jQuery.app.nav.init();

        // Dropdown submenu on small screen on click
        // --------------------------------------------------
        jQuery('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          jQuery(this).parent().siblings().removeClass('open');
          jQuery(this).parent().toggleClass('open');
        });
      }
      else{
        // Change body classes
        jQuerybody.removeClass('vertical-layout vertical-overlay-menu fixed-navbar').addClass(jQuerybody.data('menu'));

        // Remove navbar-fix-top class on large screens
        jQuery('nav.header-navbar').removeClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass(menuWrapperClasses);

        // Intitialize drill down menu for horizontal layouts
        // --------------------------------------------------
        this.drillDownMenu(screen);

        jQuery('a.dropdown-item.nav-has-children').on('click',function(){
          event.preventDefault();
          event.stopPropagation();
        });
        jQuery('a.dropdown-item.nav-has-parent').on('click',function(){
          event.preventDefault();
          event.stopPropagation();
        });
      }
    },

    toggle: function() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint
      var collapsed = this.collapsed;
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = jQuerybody.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
        case 'lg':
        case 'md':
          if(expanded === true){
            if(menu == 'vertical-compact-menu' || menu == 'vertical-overlay-menu'){
              this.hide();
            }
            else{
              this.collapse();
            }
          }
          else{
            if(menu == 'vertical-compact-menu' || menu == 'vertical-overlay-menu'){
              this.open();
            }
            else{
              this.expand();
            }
          }
          break;
        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
      }

      // Re-init sliding menu to update width
      this.drillDownMenu(currentBreakpoint.name);
    },

    update: function() {
      this.manualScroller.update();
    },

    reset: function() {
      this.expanded  = false;
      this.collapsed = false;
      this.hidden    = false;
      jQuerybody.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    },
  };

  // Navigation Menu
  jQuery.app.nav = {
    container: jQuery('.navigation-main'),
    initialized : false,
    navItem: jQuery('.navigation-main').find('li').not('.navigation-category'),

    config: {
      speed: 300,
    },

    init: function(config) {
      this.initialized = true; // Set to true when initialized
      jQuery.extend(this.config, config);

      this.bind_events();
    },

    bind_events: function() {
      var menuObj = this;

      jQuery('.navigation-main').on('mouseenter.app.menu', 'li', function() {
        var jQuerythis = jQuery(this);
        jQuery('.hover', '.navigation-main').removeClass('hover');
        if( (jQuerybody.hasClass('menu-collapsed') && jQuerybody.data('menu') != 'vertical-menu-modern') || (jQuerybody.data('menu') == 'vertical-compact-menu' && !jQuerybody.hasClass('vertical-overlay-menu')) ){
          jQuery('.main-menu-content').children('span.menu-title').remove();
          jQuery('.main-menu-content').children('a.menu-title').remove();
          jQuery('.main-menu-content').children('ul.menu-content').remove();

          // Title
          var menuTitle = jQuerythis.find('span.menu-title').clone(),
          tempTitle,
          tempLink;
          if(!jQuerythis.hasClass('has-sub') ){
            tempTitle = jQuerythis.find('span.menu-title').text();
            tempLink = jQuerythis.children('a').attr('href');
            if(tempTitle !== ''){
              menuTitle = jQuery("<a>");
              menuTitle.attr("href", tempLink);
              menuTitle.attr("title", tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass("menu-title");
            }
          }
          // menu_header_height = (jQuery('.main-menu-header').length) ? jQuery('.main-menu-header').height() : 0,
          // fromTop = menu_header_height + jQuerythis.position().top + parseInt(jQuerythis.css( "border-top" ),10);
          var fromTop;
          if(jQuerythis.css( "border-top" )){
            fromTop = jQuerythis.position().top + parseInt(jQuerythis.css( "border-top" ), 10);
          }
          else{
            fromTop = jQuerythis.position().top;
          }
          if(jQuerybody.data('menu') !== 'vertical-compact-menu'){
            menuTitle.appendTo('.main-menu-content').css({
              position:'fixed',
              top : fromTop,
            });
          }

          // Content
          if(jQuerythis.hasClass('has-sub') && jQuerythis.hasClass('nav-item')) {
            var menuContent = jQuerythis.children('ul:first');
            menuObj.adjustSubmenu(jQuerythis);
          }
        }
        jQuerythis.addClass('hover');
      }).on('mouseleave.app.menu', 'li', function() {
        // jQuery(this).removeClass('hover');
      }).on('active.app.menu', 'li', function(e) {
        jQuery(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function(e) {
        jQuery(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function(e) {

        var jQuerylistItem = jQuery(this);
        jQuerylistItem.addClass('open');

        menuObj.expand(jQuerylistItem);

        // If menu collapsible then do not take any action
        if (jQuery('.main-menu').hasClass('menu-collapsible')) {
          return false;
        }
        // If menu accordion then close all except clicked once
        else{
          jQuerylistItem.siblings('.open').find('li.open').trigger('close.app.menu');
          jQuerylistItem.siblings('.open').trigger('close.app.menu');
        }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function(e) {
        var jQuerylistItem = jQuery(this);

        jQuerylistItem.removeClass('open');
        menuObj.collapse(jQuerylistItem);

        e.stopPropagation();
      }).on('click.app.menu', 'li', function(e) {
        var jQuerylistItem = jQuery(this);
        if(jQuerylistItem.is('.disabled')){
          e.preventDefault();
        }
        else{
          if( (jQuerybody.hasClass('menu-collapsed') && jQuerybody.data('menu') != 'vertical-menu-modern')  || (jQuerybody.data('menu') == 'vertical-compact-menu' && jQuerylistItem.is('.has-sub') && !jQuerybody.hasClass('vertical-overlay-menu'))){
            e.preventDefault();
          }
          else{
            if (jQuerylistItem.has('ul')) {
              if (jQuerylistItem.is('.open')) {
                jQuerylistItem.trigger('close.app.menu');
              } else {
                jQuerylistItem.trigger('open.app.menu');
              }
            } else {
              if (!jQuerylistItem.is('.active')) {
                jQuerylistItem.siblings('.active').trigger('deactive.app.menu');
                jQuerylistItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });


      jQuery('.navbar-header, .main-menu').on('mouseenter',modernMenuExpand).on('mouseleave',modernMenuCollapse);

      function modernMenuExpand(){
        if( jQuerybody.data('menu') == 'vertical-menu-modern'){
          jQuery('.main-menu, .navbar-header').addClass('expanded');
          if(jQuerybody.hasClass('menu-collapsed')){
            var jQuerylistItem = jQuery('.main-menu li.menu-collapsed-open'),
            jQuerysubList = jQuerylistItem.children('ul');

            jQuerysubList.hide().slideDown(200, function() {
                jQuery(this).css('display', '');
            });

            jQuerylistItem.addClass('open').removeClass('menu-collapsed-open');
            // jQuery.app.menu.changeLogo('expand');
          }
        }
      }

      function modernMenuCollapse(){
        if(jQuerybody.hasClass('menu-collapsed') && jQuerybody.data('menu') == 'vertical-menu-modern'){
          setTimeout(function(){
            if(jQuery('.main-menu:hover').length === 0 && jQuery('.navbar-header:hover').length === 0){

              jQuery('.main-menu, .navbar-header').removeClass('expanded');
              if(jQuerybody.hasClass('menu-collapsed')){
                var jQuerylistItem = jQuery('.main-menu li.open'),
                jQuerysubList = jQuerylistItem.children('ul');
                jQuerylistItem.addClass('menu-collapsed-open');

                jQuerysubList.show().slideUp(200, function() {
                    jQuery(this).css('display', '');
                });

                jQuerylistItem.removeClass('open');
                // jQuery.app.menu.changeLogo();
              }
            }
          },1);
        }
      }

      jQuery('.main-menu-content').on('mouseleave', function(){
        if( jQuerybody.hasClass('menu-collapsed') || jQuerybody.data('menu') == 'vertical-compact-menu' ){
          jQuery('.main-menu-content').children('span.menu-title').remove();
          jQuery('.main-menu-content').children('a.menu-title').remove();
          jQuery('.main-menu-content').children('ul.menu-content').remove();
        }
        jQuery('.hover', '.navigation-main').removeClass('hover');
      });

      // If list item has sub menu items then prevent redirection.
      jQuery('.navigation-main li.has-sub > a').on('click',function(e){
        e.preventDefault();
      });

      jQuery('ul.menu-content').on('click', 'li', function(e) {
        var jQuerylistItem = jQuery(this);
        if(jQuerylistItem.is('.disabled')){
          e.preventDefault();
        }
        else{
          if (jQuerylistItem.has('ul')) {
            if (jQuerylistItem.is('.open')) {
              jQuerylistItem.removeClass('open');
              menuObj.collapse(jQuerylistItem);
            } else {
              jQuerylistItem.addClass('open');

              menuObj.expand(jQuerylistItem);

              // If menu collapsible then do not take any action
              if (jQuery('.main-menu').hasClass('menu-collapsible')) {
                return false;
              }
              // If menu accordion then close all except clicked once
              else{
                jQuerylistItem.siblings('.open').find('li.open').trigger('close.app.menu');
                jQuerylistItem.siblings('.open').trigger('close.app.menu');
              }

              e.stopPropagation();
            }
          } else {
            if (!jQuerylistItem.is('.active')) {
              jQuerylistItem.siblings('.active').trigger('deactive.app.menu');
              jQuerylistItem.trigger('active.app.menu');
            }
          }
        }

        e.stopPropagation();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} jQuerymenuItem The parent menu item containing the submenu.
     */
    adjustSubmenu: function ( jQuerymenuItem ) {
      var menuHeaderHeight, menutop, topPos, winHeight,
      bottomOffset, subMenuHeight, popOutMenuHeight, borderWidth, scroll_theme,
      jQuerysubmenu = jQuerymenuItem.children('ul:first'),
      ul = jQuerysubmenu.clone(true);

      menuHeaderHeight = jQuery('.main-menu-header').height();
      menutop          = jQuerymenuItem.position().top;
      winHeight        = jQuerywindow.height() - jQuery('.header-navbar').height();
      borderWidth      = 0;
      subMenuHeight    = jQuerysubmenu.height();

      if(parseInt(jQuerymenuItem.css( "border-top" ),10) > 0){
        borderWidth = parseInt(jQuerymenuItem.css( "border-top" ),10);
      }

      popOutMenuHeight = winHeight - menutop - jQuerymenuItem.height() - 30;
      scroll_theme     = (jQuery('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';

      if(jQuerybody.data('menu') === 'vertical-compact-menu'){
        topPos = menutop + borderWidth;
        popOutMenuHeight = winHeight - menutop - 30;
      }
      else if(jQuerybody.data('menu') === 'vertical-content-menu'){
        topPos = menutop + jQuerymenuItem.height() + borderWidth;
        popOutMenuHeight = winHeight - jQuery('.content-header').height() -jQuerymenuItem.height() - menutop - 60;
      }
      else{
        topPos = menutop + jQuerymenuItem.height() + borderWidth;
      }
      
      if(jQuerybody.data('menu') == 'vertical-content-menu'){
        ul.addClass('menu-popout').appendTo('.main-menu-content').css({
          'top' : topPos,
          'position' : 'fixed',
        });
      }
      else{
        ul.addClass('menu-popout').appendTo('.main-menu-content').css({
          'top' : topPos,
          'position' : 'fixed',
          'max-height': popOutMenuHeight,
        });

        jQuery('.main-menu-content > ul.menu-content').perfectScrollbar({
          theme:scroll_theme,
        });
      }
    },

    collapse: function(jQuerylistItem, callback) {
      var jQuerysubList = jQuerylistItem.children('ul');

      jQuerysubList.show().slideUp(jQuery.app.nav.config.speed, function() {
        jQuery(this).css('display', '');

        jQuery(this).find('> li').removeClass('is-shown');

        if (callback) {
          callback();
        }

        jQuery.app.nav.container.trigger('collapsed.app.menu');
      });
    },

    expand: function(jQuerylistItem, callback) {
      var jQuerysubList  = jQuerylistItem.children('ul');
      var jQuerychildren = jQuerysubList.children('li').addClass('is-hidden');

      jQuerysubList.hide().slideDown(jQuery.app.nav.config.speed, function() {
        jQuery(this).css('display', '');

        if (callback) {
          callback();
        }

        jQuery.app.nav.container.trigger('expanded.app.menu');
      });

      setTimeout(function() {
        jQuerychildren.addClass('is-shown');
        jQuerychildren.removeClass('is-hidden');
      }, 0);
    },

    refresh: function() {
      jQuery.app.nav.container.find('.open').removeClass('open');
    },
  };

})(window, document, jQuery);