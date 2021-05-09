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
		$user_session = $this->session->userdata("user");
		//print_r($user_session);exit;
		if(!isset($user_session) || $user_session == '')
		{	
			
			$this->form_validation->set_rules('user_email','User Email','required');
	        $this->form_validation->set_rules('user_password','User Password','required');
	        if($this->form_validation->run() != FALSE)
	        {     

	            $post_data = $_POST;
	            $admin_details = $this->Common_Model->get_table_data_with_condition("user",array("email" => $post_data['user_email'],"password" => md5($post_data['user_password']),'trash'=>'0'));
	            if(!empty($admin_details))
	            {	
	            	if($admin_details['status'] == '1')
	            	{
	            		$session_array = array(
		                "id" => $admin_details["id"],
		                "full_name" => $admin_details["full_name"],
		                "email" => $admin_details["email"],
		                "profile" => $admin_details["profile_pic"]
		            	);

		                $this->session->userdata("user");
		                $this->session->set_userdata("user",$session_array);;
		               /// $this->pass_data["page_name"] = "admin/dashboard";
		                //$this->pass_data["view_page_title"] = "Dashboard";
		                //$this->pass_data["datatable"] = false;
		                //$this->load->view('admin/include/include',$this->pass_data);
		                redirect('dashboard');
	            	}
	            	else
	            	{
	            		redirect('welcome');
	            	}
	                

	            }
	            else
	            {
	                $this->load->view('login');
	            }
	           
	            
	        }else
	        {   
	            $this->load->view('login');
	        }
		}
		else
		{
			redirect('dashboard');
		}

		
		$this->load->view('login');
	}
	public function logout() {
        $this->session->unset_userdata("user");
        redirect("login","refresh");
    }
    public function registration()
    {
    	echo 'in';exit;
    	
    }
}
?>