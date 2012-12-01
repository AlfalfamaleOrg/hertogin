<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class leader_model extends MY_Model {
        function __construct() {
            $this->name = 'leader';
        }
        
        public function getByWorkshopId($workshopId) {
            return $this->db->get_where('workshop_leader', array('workshop_id' => $workshopId))->result_array();
        }
        
        public function selectAll() {
            return $this->db->get('leader')->result_array();
        }
        
        public function update($id, $data) {
            $this->db->update('leader', $data, array('id' => $id));
        }
        
        public function create($data) {
            $this->db->insert('leader', $data);
        }
        
        public function getById($id) {
            $result = $this->db->get_where('leader', array('id' => $id));
            
            if ($result->num_rows() === 1) {
                return $result->row_array();
            } else {
                return false;
            }
        }
        
        public function selectByUserId($userId) {
            return $this->db->get_where('leader', array('user_id' => $userId))->result_array();            
        }
    }
