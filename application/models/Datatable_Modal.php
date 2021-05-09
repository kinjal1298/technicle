<?php 
class Datatable_Modal extends CI_Model {

	public function users_datatable_count($search) {
		$this->db->select("`user.id`");
		$this->db->from("`user`");
		if($search != "") {
			$this->db->group_start();
			$this->db->like("`first_name`",$search);
			$this->db->or_like("`user.last_name`",$search);
			$this->db->or_like("`user.email`",$search);
			$this->db->or_like("`user.mobile_number`",$search);
			$this->db->group_end();
		}
		$this->db->join('city','user.city = city.id');
		$query_get = $this->db->get();
		return $query_get->num_rows();
	}

	public function users_datatable($start,$length,$search,$order_column_name,$order_type){
		$this->db->select("`user.id`,CONCAT(`firstname`,' ',`lastname`) AS `full_name`,`user.email`,`user.city`,`user.gender`,`user.status`,`city.name` AS `city_name`");
		$this->db->from("`user`");
		if($search != "") {
			$this->db->group_start();
			$this->db->like("`user.firstname`",$search);
			$this->db->or_like("`user.lastname`",$search);
			$this->db->or_like("`user.email`",$search);
			$this->db->group_end();
		}
		$this->db->join('city','user.city = city.id');
		$this->db->group_by("`user.id`");
		$this->db->order_by($order_column_name." ".$order_type);
		$this->db->limit($length,$start);
		$query_get = $this->db->get();
		return $query_get->result_array();
	}
	/*city model*/
	public function city_datatable_count($search) {
		$this->db->select("`id`");
		$this->db->from("`city`");
		/*if($search != "") {
			$this->db->group_start();
			$this->db->like("`first_name`",$search);
			$this->db->or_like("`last_name`",$search);
			$this->db->or_like("`email`",$search);
			$this->db->or_like("`mobile_number`",$search);
			$this->db->group_end();
		}*/
		$this->db->where('trash','0');
		$query_get = $this->db->get();
		return $query_get->num_rows();
	}

	public function city_datatable($start,$length,$search,$order_column_name,$order_type){
		$this->db->select("`id`,`name`,`status`");
		$this->db->from("`city`");
		/*if($search != "") {
			$this->db->group_start();
			$this->db->like("`firstname`",$search);
			$this->db->or_like("`lastname`",$search);
			$this->db->or_like("`email`",$search);
			$this->db->group_end();
		}*/
		$this->db->where('trash','0');
		$this->db->group_by("`id`");
		$this->db->order_by($order_column_name." ".$order_type);
		$this->db->limit($length,$start);
		$query_get = $this->db->get();
		return $query_get->result_array();
	}
}