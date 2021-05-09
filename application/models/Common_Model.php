<?php
class Common_Model extends CI_Model {
	
	public function insert_data($table_name, $insert_data) 
	{
		$this->db->insert($table_name, $insert_data);
		return $this->db->insert_id();
	}
	public function get_count_of_table_data($table_name,$condition)
	{
		return $this->db->get_where($table_name, $condition)->num_rows();

	}
	public function get_table_data_with_condition($table_name,$condition)
	{
		return $this->db->get_where($table_name, $condition)->row_array();

	}
	public function get_multiple_table_data_with_condition($table_name,$condition)
	{
		return $this->db->get_where($table_name, $condition)->result_array();

	}
	public function get_table_data($table_name)
	{
		return $this->db->get($table_name)->result_array();
	}
	public function update_data($table_name,$update_detail,$condition)
	{	
		//print_r($update_detail);exit;
		$this->db->set($update_detail);
		$this->db->where($condition);
		return $this->db->update($table_name); 

	}
	
}

?>