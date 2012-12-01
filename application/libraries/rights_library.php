<?php
class Rights_Library {
    
    private $isAdmin = null;
    
    public function isAdmin() {
        if ($this->isAdmin !== null) {
            return $this->isAdmin;
        }
        
        $ci =& get_instance();
        
        if (!$ci->tank_auth->is_logged_in()) {
            $this->isAdmin = false;
            return false;
        }
        
        $userId = $ci->tank_auth->get_user_id();
        
        if (!$userId) {
            $this->isAdmin = false;
            return false;
        }
        
        $ci->load->model('leader_model');
        $leaders = $ci->leader_model->selectByUserId($userId);
        
        if (count($leaders) === 0) {
            $this->isAdmin = true;
            return true;
        } else {
            $this->isAdmin = false;
            return;
        }   
    }
}