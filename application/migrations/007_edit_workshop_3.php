<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Edit_workshop_3 extends CI_Migration {

    public function up() {
        $fields = array(
            'type' => array(
                'type' => 'TEXT',
                'null' => false
            )        
        );
        
        $this->dbforge->add_column('workshop', $fields);
    }

    public function down() {
        
    }
}