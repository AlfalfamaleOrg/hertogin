<?php

class workshop_library {
    
    private $ci;
    private $db;
    
    public function __construct() {
        $this->ci =& get_instance();
        $this->db = $this->ci->db;
    }
    
    public function linkLeaders($workshopId, $leaders) {
        $this->db->delete('workshop_leader', array('workshop_id' => $workshopId));
        
        if (!count($leaders)) {
            return;
        }
        
        $insert = array();
        foreach ($leaders as $leaderId) {
            $insert[] = array(
                'leader_id' => $leaderId,
                'workshop_id' => $workshopId
            );
        }
        
        $this->db->insert_batch('workshop_leader', $insert);
    }
}