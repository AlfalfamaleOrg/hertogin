<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class room_model extends MY_Model {
       function __construct() {
            $this->name = 'room';
        }
        
        public function selectAll() {
            return $this->db->get('room')->result_array();
        }
        
        public function update($id, $data) {
            $this->db->update('room', $data, array('id' => $id));
        }
        
        public function create($data) {
            $this->db->insert('room', $data);
        }
    }
