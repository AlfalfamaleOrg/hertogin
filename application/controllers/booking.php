<?php

class booking extends MY_Controller {
    public function read() {
        $this->load->model('booking_model');
        $bookings = $this->booking_model->selectAll();
        
        outputJSON($bookings);
    }
    
    public function create() {
        $post = $this->input->post();
        
        $post['from_datetime'] = $post['date'] . ' ' . $post['from'];
        $post['to_datetime'] = $post['date'] . ' ' . $post['to'];
        
        $this->booking_model->create($post);
    }
}
