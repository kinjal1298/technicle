<?php

if(isset($page_name) && $page_name !='')
{ 
	$this->load->view('admin/layout/header');
	$this->load->view('admin/layout/sidebar');
	if(isset($datatable) && $datatable === true){
		$this->load->view("admin/layout/datatables_js");
	}
	$this->load->view($page_name);
	$this->load->view('admin/layout/footer');
}
?>