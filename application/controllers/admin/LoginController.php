<?php
Class LoginController extends CI_Controller
{	
		function __construct() 
		{
        	parent::__construct();
        	$this->load->model('Common_Model');
        }
	public function index()
	{	
		$admin_session = $this->session->userdata("admin");
		//print_r($admin_session);exit;
		if(!isset($admin_session) || $admin_session == '')
		{
			$this->form_validation->set_rules('admin_email','Admin Email','required');
	        $this->form_validation->set_rules('admin_password','Admin Password','required');
	        if($this->form_validation->run() != FALSE)
	        {     
	            $post_data = $_POST;
	            $admin_details = $this->Common_Model->get_table_data_with_condition("admin",array("email" => $post_data['admin_email'],"password" => md5($post_data['admin_password']),'status'=>'1','trash'=>'0'));
	            //print_r($admin_details);exit;
	            if(!empty($admin_details))
	            {
	                $session_array = array(
		                "id" => $admin_details["id"],
		                "full_name" => $admin_details["full_name"],
		                "email" => $admin_details["email"],
		                "profile" => $admin_details["profile_pic"]
	            	);

	                $this->session->userdata("admin");
	                $this->session->set_userdata("admin",$session_array);;
	               /// $this->pass_data["page_name"] = "admin/dashboard";
	                //$this->pass_data["view_page_title"] = "Dashboard";
	                //$this->pass_data["datatable"] = false;
	                //$this->load->view('admin/include/include',$this->pass_data);
	                redirect('admin/dashboard');

	            }
	            else
	            {
	                $this->load->view('admin/login');
	            }
	           
	            
	        }else
	        {   
	            $this->load->view('admin/login');
	        }
		}
		else
		{
			redirect('admin/dashboard');
		}

		
		$this->load->view('admin/login');
	}
	public function logout() {
        $this->session->unset_userdata("admin");
        redirect("admin","refresh");
    }
}
?>