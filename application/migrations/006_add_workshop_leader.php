<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Add_workshop_leader extends CI_Migration {

    public function up() {
        $fields = array(
            'id' => array(
                'type' => 'INT',
                'auto_increment' => true
            ),
            'workshop_id' => array(
                'type' => 'INT',
                'null' => false
            ),
            'leader_id' => array(
                'type' => 'INT',
                'null' => false
            )
        );
        
        $this->dbforge->add_field($fields);
        $this->dbforge->add_key('id', TRUE);
        $this->dbforge->create_table('workshop_leader');
    }

    public function down() {
        
    }
}