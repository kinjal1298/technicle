<?php
defined("BASEPATH") OR exit("No direct script access allowed");

class UserController extends CI_Controller {
    
    
    public function __construct() {
        parent::__construct();
        //$this->load->helper('common_helper');
        $this->load->model('Common_Model');
        $this->load->model('Datatable_Modal');


    }
    public function index() {
        $this->pass_data["view_page_title"] = "Users";
		$this->pass_data["datatable"] = TRUE;
		$this->pass_data["page_name"] = 'admin/pages/user/index';
        $this->load->view("admin/include/include",$this->pass_data);
    }
    public function users_datatable() {
		$post_data = $this->input->post();

		$start 			= $post_data["start"];
		$length 		= $post_data["length"];
		$search 		= $post_data["search"]["value"];
		$order_column 	= $post_data["order"][0]["column"];
		$order_type 	= $post_data["order"][0]["dir"];

		$field_array = array("`id`","`first_name`","`email`","`profile`","`id`","`id`");
		$order_column_name = $field_array[$order_column];

		$user_data = $this->Datatable_Modal->users_datatable($start,$length,$search,$order_column_name,$order_type);
		$total_record = $this->Datatable_Modal->users_datatable_count($search);
		$data_array = array();

		if(!empty($user_data)) {
			foreach ($user_data as $key => $value) {
				$profile_image = isset($value["profile_image"]) ? $value["profile_image"]:'';
				$profile_image = '<img src="'.$profile_image.'" alt='.$value['full_name'].' class="rounded" height="50" width="50">';

				$push_array[0] = $value["id"];
				$push_array[1] = $value["full_name"];
				$push_array[2] = $value["email"];
				$push_array[3] = $value['city_name'];
				$push_array[4] = $value["status"];
				$push_array[5] = '';
				array_push($data_array, $push_array);
			}
		}

		$pass_json_array = array(
			"draw" 				=> $post_data["draw"],
			"recordsTotal" 		=> $total_record,
			"recordsFiltered" 	=> $total_record,
			"data" 				=> $data_array,
		);
		echo json_encode($pass_json_array);
	}
    public function add()
    {
        $this->form_validation->set_rules('first_name','First Name','required');
        $admin_session = $this->session->userdata("admin");
        if($this->form_validation->run() != FALSE)
        {     
            $post_data = $_POST;
            $party_array = array(
                            'firstname'=>$post_data['first_name'],
                            'lastname'=>$post_data['last_name'],
                            'email'=>$post_data['email'],
                            'password'=>$post_data['password'],
                            'city'=>$post_data['city'],
                            'gender'=>$post_data['gender'],
                            'status'=>'0',
                            'created_at'=>date('Y-m-d')
                            );
            //print_r($_POST);
           // print_r($_FILES['party_logo']);exit;
            $inserted_data = $this->Common_Model->insert_data('user',$party_array);
            $last_id = $this->db->insert_id();
            //print_r($inserted_data);exit;
            if(isset($inserted_data) && $inserted_data!= '' && $inserted_data > 0)
            {   
                //print_r($_FILES['party_logo']);exit;
                if(isset($_POST['hobby']) && !empty($_POST['hobby']))
                {
                    foreach ($_POST['hobby'] as $key => $value) {
                        $insert_array = array(
                            'hobby'=>$value,
                            'user_id'=>$last_id);
                      $inserted_hobby_data = $this->Common_Model->insert_data('user_hobbies',$insert_array);
                    }
                        //$this->pass_data["page_name"] = "admin/pages/user";
                        //$this->pass_data["view_page_title"] = "User";
                        //$this->pass_data['datatable'] = false;
                        //$this->load->view('admin/include/include',$this->pass_data);
                    redirect('admin/user');
                    
                }
            }  
        }else
        {   
            /*get all  city data*/
            $city_details = $this->Common_Model->get_multiple_table_data_with_condition('city',array('trash'=>'0','trash'=>'0'));
            $this->pass_data["page_name"] = "admin/pages/user/add";
            $this->pass_data["view_page_title"] = "Add User";
            $this->pass_data['datatable'] = false;
            $this->pass_data['citydata'] = $city_details;
            $this->load->view('admin/include/include',$this->pass_data);
            //$this->load->view('admin/pages/party/add');
        }
    }
    public function edit($id)
    {   
        if(isset($id) && $id != '')
        {   
            $this->form_validation->set_rules('first_name','First Name','required');
            $admin_session = $this->session->userdata("admin");
            if($this->form_validation->run() != FALSE)
            {     
                $post_data = $_POST;
                //echo '<pre>';print_r($post_data);exit;
                $user_array = array(
                                'firstname'=>$post_data['first_name'],
                                'lastname'=>$post_data['last_name'],
                                'email'=>$post_data['email'],
                                'city'=>$post_data['city'],
                                'gender'=>isset($post_data['gender'])?$post_data['gender']:'',
                                'status'=>'0',
                                'created_at'=>date('Y-m-d')
                                );
                //print_r($_POST);
                //print_r($user_array);exit;
                $updated_data = $this->Common_Model->update_data('user',$user_array,array('id'=>$id));
                //print_r($inserted_data);exit;
                if(isset($updated_data) && $updated_data!= '' && $updated_data > 0)
                {   
                    //print_r($_FILES['party_logo']);exit;
                    //update hooby
                    if(isset($_POST['hobby']) && !empty($_POST['hobby']))
                    {
                        $this->db->delete('user_hobbies', array('user_id' => $id));  
                       // echo $this->db->last_query();exit;
                        foreach ($_POST['hobby'] as $key => $value) {
                            $updated_array=array(
                                'hobby'=>$value,
                                'user_id'=>$id
                            );
                          $inserted_hobby_data = $this->Common_Model->insert_data('user_hobbies',$updated_array);
                        }
                            //$this->pass_data["page_name"] = "admin/pages/user";
                            //$this->pass_data["view_page_title"] = "User";
                            //$this->pass_data['datatable'] = false;
                            //$this->load->view('admin/include/include',$this->pass_data);
                       
                        
                    }
                }  
                 redirect('admin/user');
            }
            else
            {
                $user_data = $this->Common_Model->get_table_data_with_condition('user',array('id'=>$id));
                $city_details = $this->Common_Model->get_multiple_table_data_with_condition('city',array('trash'=>'0','trash'=>'0'));
                /*$user_hobby_data = $this->Common_Model->get_multiple_table_data_with_condition('user_hobbies',array('user_id'=>$id));*/
                $user_hobby_data =$this->db->select('hobby')->from('user_hobbies')->where('user_id',$id)->get()->result_array();
                $hobby_array =array();
                foreach ($user_hobby_data  as $key => $value) {
                   array_push($hobby_array,$value['hobby']);
                }
                $this->pass_data["page_name"] = "admin/pages/user/edit";
                $this->pass_data["view_page_title"] = "Edit User";
                $this->pass_data['datatable'] = false;
                $this->pass_data['userdata'] = $user_data;
                $this->pass_data['citydata'] = $city_details;
                $this->pass_data['user_hobby_data'] = $hobby_array;
                //echo '<pre>';print_r($this->pass_data);exit;
                $this->load->view('admin/include/include',$this->pass_data);
            }    
        }
    }
    public function change_status()
    {
    	if(isset($_POST) && !empty($_POST))
    	{
    		$status = $_POST['user_status'];
    		$user_id = $_POST['user_id'];
    		$update_array = array('status'=>$status);
    		//print_r($update_array);exit;
    		$updated_data = $this->Common_Model->update_data('user',$update_array,array('id'=>$user_id));
    		//print_r($updated_data);exit;
    		if($updated_data && $status =='1')
    		{
    			echo json_encode(array('status'=>'true'));
    		}
    		else
    		{
    			echo json_encode(array('status'=>'false'));
    		}
    	}
    }
    public function delete_function()
    {
    	if(isset($_POST) && !empty($_POST))
    	{
    		$user_id = $_POST['user_id'];
    		$update_array = array('trash'=>'1');
    		//print_r($update_array);exit;
    		$updated_data = $this->Common_Model->update_data('user',$update_array,array('id'=>$user_id));
    		//print_r($updated_data);exit;
    		if($updated_data)
    		{
    			echo json_encode(array('status'=>'true'));
    		}
    		else
    		{
    			echo json_encode(array('status'=>'false'));
    		}
    	}
    }
    public function validate_key($key = "") 
    {   
        if($key != "") {
            if($this->config->item("api_key") == $key) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

?>
