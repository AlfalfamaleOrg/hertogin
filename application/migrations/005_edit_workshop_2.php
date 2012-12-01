<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Edit_workshop_2 extends CI_Migration {

    public function up() {
        $fields = array(
            'intro_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'description_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'workshop_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'duration_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'attendees_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'price_text' => array(
                'type' => 'TEXT',
                'null' => true
            ),
            'contact_text' => array(
                'type' => 'TEXT',
                'null' => true
            )            
        );
        
        $this->dbforge->add_column('workshop', $fields);
    }

    public function down() {
        
    }
}