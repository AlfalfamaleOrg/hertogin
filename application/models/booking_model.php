<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class booking_model extends MY_Model {
       function __construct() {
            $this->name = 'booking';
        }
        
        public function selectAll() {
            return $this->db->select('b.*, w.name as workshop, l.name as leader, r.name as room, s.name as booking_status, DATE_FORMAT(b.date, "%e %b %Y") as humandate', false)
                ->join('workshop w', 'b.workshop_id = w.id', 'left')
                ->join('leader l', 'b.leader_id = l.id', 'left')
                ->join('room r', 'b.room_id = r.id', 'left')
                ->join('booking_status s', 'b.booking_status_id = s.id', 'left')
                ->get('booking b')->result_array();
        }
        
        public function create($data) {
            $this->db->insert('booking', $data);
        }
    }
