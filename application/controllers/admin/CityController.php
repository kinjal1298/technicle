<?php
defined("BASEPATH") OR exit("No direct script access allowed");

class CityController extends CI_Controller {
    
    
    public function __construct() {
        parent::__construct();
        //$this->load->helper('common_helper');
        $this->load->model('Common_Model');
        $this->load->model('Datatable_Modal');


    }
    public function index() {
        $this->pass_data["view_page_title"] = "City";
		$this->pass_data["datatable"] = TRUE;
		$this->pass_data["page_name"] = 'admin/pages/city/index';
        $this->load->view("admin/include/include",$this->pass_data);
    }
    public function city_datatable() {
		$post_data = $this->input->post();

		$start 			= $post_data["start"];
		$length 		= $post_data["length"];
		$search 		= $post_data["search"]["value"];
		$order_column 	= $post_data["order"][0]["column"];
		$order_type 	= $post_data["order"][0]["dir"];

		$field_array = array("`id`","`name`");
		$order_column_name = $field_array[$order_column];

		$user_data = $this->Datatable_Modal->city_datatable($start,$length,$search,$order_column_name,$order_type);
		$total_record = $this->Datatable_Modal->city_datatable_count($search);
		$data_array = array();

		if(!empty($user_data)) {
			foreach ($user_data as $key => $value) {

				$push_array[0] = $value["id"];
				$push_array[1] = $value["name"];
				$push_array[2] = $value["status"];
				$push_array[3] = '';
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
        $this->form_validation->set_rules('city_name','city_name','required');
        $admin_session = $this->session->userdata("admin");
        if($this->form_validation->run() != FALSE)
        {     
            $post_data = $_POST;
            $city_array = array(
                            'name'=>$post_data['city_name'],
                            'status'=>'0',
                            'trash'=>'0',
                            'created_at'=>date('Y-m-d')
                            );
            //print_r($city_array);exit;
           // print_r($_FILES['party_logo']);exit;
            $inserted_data = $this->Common_Model->insert_data('city',$city_array);
            //print_r($inserted_data);exit;
            if(isset($inserted_data) && $inserted_data!= '' && $inserted_data > 0)
            {   
                redirect('admin/city');
            }  
        }else
        {   

            $this->pass_data["page_name"] = "admin/pages/City/add";
            $this->pass_data["view_page_title"] = "Add City";
            $this->pass_data['datatable'] = false;
            $this->load->view('admin/include/include',$this->pass_data);
            //$this->load->view('admin/pages/party/add');
        }
    }
    public function edit($id)
    {   
        if(isset($id) && $id != '')
        {
            /*$user_data = $this->Common_Model->get_table_data_with_condition('user',array('id'=>$id));
            if(!empty($user_data))
            {

            }*/    
            $this->form_validation->set_rules('city_name','City Name','required');
            $admin_session = $this->session->userdata("admin");
            if($this->form_validation->run() != FALSE)
            {     
                $post_data = $_POST;
                $user_array = array(
                                'name'=>$post_data['city_name'],
                                'trash'=>'0',
                                'status'=>'0',
                                'created_at'=>date('Y-m-d')
                                );
                //print_r($_POST);
                //print_r($user_array);exit;
                $updated_data = $this->Common_Model->update_data('city',$user_array,array('id'=>$id)); 
                redirect('admin/city');
            }
            else
            {
                $city_data = $this->Common_Model->get_table_data_with_condition('city',array('id'=>$id));
                $this->pass_data["page_name"] = "admin/pages/city/edit";
                $this->pass_data["view_page_title"] = "Edit City";
                $this->pass_data['datatable'] = false;
                $this->pass_data['citydata'] = $city_data;
                //print_r($this->pass_data);exit;
                $this->load->view('admin/include/include',$this->pass_data);
            }    
        }
    }
    public function change_status()
    {
    	if(isset($_POST) && !empty($_POST))
    	{
    		$status = $_POST['city_status'];
    		$user_id = $_POST['user_id'];
    		$update_array = array('status'=>$status);
    		//print_r($update_array);exit;
    		$updated_data = $this->Common_Model->update_data('city',$update_array,array('id'=>$user_id));
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
    		$city_id = $_POST['city_id'];
    		$update_array = array('trash'=>'1');
    		//print_r($update_array);exit;
    		$updated_data = $this->Common_Model->update_data('city',$update_array,array('id'=>$city_id));
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
