<?php

class leader extends MY_Controller {
    public function read() {
        $this->load->model('leader_model');
        $leaders = $this->leader_model->selectAll();
        
        outputJSON($leaders);
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
            'name' => $post['name'],
            'email' => $post['email']
        );
        
        $this->load->model('leader_model');
        $this->leader_model->update($id, $data);        
    }
    
    public function create() {
        if (!isAdmin()) show_404();
        $post = $this->input->post();
        
        $data = array(
            'name' => $post['name'],
            'email' => $post['email']
        );
        
        $this->load->model('leader_model');
        $this->leader_model->create($data); 
    }
    
    public function createLogin() {
        if (!isAdmin()) show_404();
        $id = $this->input->post('id');
        
        if (!$id) {
            return false;
        }
        
        $leader = $this->leader_model->getById($id);
        
        if (!$leader) {
            return false;
        }
        
        $userData = $this->tank_auth->create_user('', $leader['email'], md5(rand(1000000000, 10000000000000000)), false);
        
        if ($userData) {
            $this->leader_model->update($leader['id'], array('user_id' => $userData['user_id']));
        }
        
        $data = $this->tank_auth->forgot_password($leader['email']);
        
        $data['site_name'] = $this->config->item('website_name', 'tank_auth');

        // Send email with new password
        $this->_send_email('forgot_password', $data['email'], $data);
        
        return true;
    }
    
    /**
    * Double function in controller/auth.php
    */
    function _send_email($type, $email, &$data) {
        if (!isAdmin()) show_404();
        $this->load->library('email');
        $this->email->from($this->config->item('webmaster_email', 'tank_auth'), $this->config->item('website_name', 'tank_auth'));
        $this->email->reply_to($this->config->item('webmaster_email', 'tank_auth'), $this->config->item('website_name', 'tank_auth'));
        $this->email->to($email);
        $this->email->subject(sprintf($this->lang->line('auth_subject_'.$type), $this->config->item('website_name', 'tank_auth')));
        $this->email->message($this->load->view('email/'.$type.'-html', $data, TRUE));
        $this->email->set_alt_message($this->load->view('email/'.$type.'-txt', $data, TRUE));
        $this->email->send();
    }
}
