<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class workshop_model extends MY_Model {
    
    function __construct() {
        $this->name = 'workshop';
    }
    
    public function selectAll() {
        return $this->db->get('workshop')->result_array();
    }
    
    public function update($id, $data) {
        $this->db->update('workshop', $data, array('id' => $id));
    }
    
    public function create($data) {
        $this->db->insert('workshop', $data);
        return $this->db->insert_id();
    }
}
    
