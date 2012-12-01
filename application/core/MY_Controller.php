<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {
    
    protected $user_id;

	public function __construct()
	{
        parent::__construct();
        
        $call = strtolower($this->uri->segment(1));
        
        if (!$this->tank_auth->is_logged_in()) {
            redirect('/auth/login/');
        }
        
        $this->user_id = $this->tank_auth->get_user_id();

        if ( ! $this->migration->current())
        {
            show_error($this->migration->error_string());
        }
	}
}