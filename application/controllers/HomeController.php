<?php
Class HomeController extends CI_Controller
{	
		function __construct() 
		{
        	parent::__construct();
        	$this->load->model('Common_Model');
        }
	public function index()
	{		
		$this->load->view('web/home');
	}
	public function welcome_page()
	{		
		
		$this->load->view('web/welcome');
	}


}
?>