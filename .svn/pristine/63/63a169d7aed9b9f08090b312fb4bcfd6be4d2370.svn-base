<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Add_image extends CI_Migration {

    public function up() {
        $fields = array(
            'id' => array(
                'type' => 'INT',
                'auto_increment' => true
            ),
            'name' => array(
                'type' => 'VARCHAR(45)',
                'null' => false
            ),
            'workshop_id' => array(
                'type' => 'INT',
                'null' => true
            ),
            'location' => array(
                'type' => 'TEXT',
                'null' => false
            )
        );
        
        $this->dbforge->add_field($fields);
        $this->dbforge->add_key('id', TRUE);
        $this->dbforge->create_table('image');
    }

    public function down() {
        
    }
}