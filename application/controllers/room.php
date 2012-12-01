<?php

class room extends MY_Controller {
    
    public function __construct() {
        parent::__construct();
        $this->load->model('room_model');
    }
    
    public function read() {
        $rooms = $this->room_model->selectAll();
        
        outputJSON($rooms);
    }
    
    public function save() {
        if (!isAdmin()) show_404();
        if ($this->input->post('id')) {
            $this->update();
        } else {
            $this->create();
        }
    }
    
    public function update() {
        if (!isAdmin()) show_404();
        $post = $this->input->post();
        
        $id = $post['id'];
        
        $data = array(
            'name' => $post['name']
        );
        
        $this->room_model->update($id, $data);        
    }
    
    public function create() {
        if (!isAdmin()) show_404();
        $post = $this->input->post();
        
        $data = array(
            'name' => $post['name']
        );
        
        $this->room_model->create($data); 
    }
}
