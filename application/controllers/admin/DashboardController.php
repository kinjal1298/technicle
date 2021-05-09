<?php
Class DashboardController extends CI_Controller
{	
		function __construct() 
		{
        	parent::__construct();
        	$this->load->model('Common_Model');
        }
	public function index()
	{	
		$admin_session = $this->session->userdata("admin");
		if(isset($admin_session) && $admin_session != '')
		{
			//$this->session->userdata("admin");
	        //$this->session->set_userdata("admin",$session_array);;
	        $user_count = $this->db->where('trash','0')->get('user')->num_rows();
	        $city_count = $this->db->where('trash','0')->get('city')->num_rows();
	        $this->pass_data["page_name"] = "admin/dashboard";
	        $this->pass_data["view_page_title"] = "Dashboard";
	        $this->pass_data["datatable"] = false;
	        $this->pass_data["user_count"] = $user_count;
	        $this->pass_data["city_count"] = $city_count;
	        $this->load->view('admin/include/include',$this->pass_data);
		}
		else
		{
			redirect('admin/dashboard');
		}
	}
}
?>