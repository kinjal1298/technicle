<?php
 $assets = $this->config->item('base_url');
?>
<div class="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class="nav-item <?php if($view_page_title == "Dashboard") {echo "active";} ?>">
                <a href="<?php  echo $assets."admin/dashboard"; ?>">
                    <i class="la la-tachometer-alt"></i>
                    <span class="menu-title" data-i18n="nav.changelog.main">Dashboard</span>
                </a>
            </li>
            <li class="nav-item <?php if($view_page_title == "Users") {echo "active";} ?>">
                <a href="<?php  echo $assets."admin/user"; ?>">
                    <i class="la la-users"></i>
                    <span class="menu-title">Users</span>
                </a>
            </li>
            <li class="nav-item <?php if($view_page_title == "City") {echo "active";} ?>">
                <a href="<?php  echo $assets."admin/city"; ?>">
                    <i class="la la-cog"></i>
                    <span class="menu-title">City</span>
                </a>
            </li>
           
        </ul>
    </div>
</div>