<?php

class workshop extends MY_Controller {
    
    public function __construct() {
        parent::__construct();
        $this->load->model('workshop_model');
    }
    
    public function read() {
        $workshops = $this->workshop_model->selectAll();
        
        $this->load->model('leader_model');
        
        foreach ($workshops as $key => $workshop) {
            $leaders = $this->leader_model->getByWorkshopId($workshop['id']);
            foreach ($leaders as $leader) {
                $workshops[$key]['leaders'][] = $leader['leader_id'];
            }            
        }
        
        outputJSON($workshops);
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
        
        $this->workshop_model->update($id, $data);
        
        $this->linkLeaders($id, $post['leaders']);      
    }
    
    public function create() {
        if (!isAdmin()) show_404();
        $post = $this->input->post();
        
        $data = array(
            'name' => $post['name']
        );
        
        $id = $this->workshop_model->create($data); 
        
        $this->linkLeaders($id, $post['leaders']);      
    }
    
    private function linkLeaders($id, $leaders) {        
        $this->load->library('workshop_library');
        
        if (!$leaders) {
            $this->workshop_library->linkLeaders($id, array());
        } else {
            $this->workshop_library->linkLeaders($id, explode(',', $leaders));
        }
    }
}
