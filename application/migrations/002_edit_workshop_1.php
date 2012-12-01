<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Edit_workshop_1 extends CI_Migration {

    public function up() {
        $fields = array(
            'description' => array(
                'type' => 'TEXT',
                'null' => true
            )
        );
        
        $this->dbforge->add_column('workshop', $fields);
    }

    public function down() {
        
    }
}