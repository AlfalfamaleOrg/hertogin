<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Admin extends MY_Controller {
    function index() {
        $data['user_id'] = $this->user_id;
        $data['username'] = $this->tank_auth->get_username();
        $this->load->view('admin', $data);
    }
        
}