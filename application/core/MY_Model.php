<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Model extends CI_Model {

    private $where = array();
        
    protected $name;
        
    function selectAll() {
        return $this->db->select('*')
            ->from($this->name)
            ->get()->result($this->name);
    }
    
    function getById($id) {
        return $this->db->select('*')
            ->from($this->name)
            ->where('id', $id)
            ->get()->row(0, $this->name); 
    }
    
    function addWhere($name, $value) {
        $this->where[$name] = $value;
        return $this;
    }
    
    function select() {
        $this->db->select('*')->from($this->name);
        
        foreach ($this->where as $key => $value) {
            $this->db->where($key, $value);
        }
        
        $this->where = array();
        
        return $this->db->get()->result($this->name);
    }
    
    function get() {
        $this->db->select('*')->from($this->name);
        
        foreach ($this->where as $key => $value) {
            $this->db->where($key, $value);
        }
        
        $this->where = array();
        
        return $this->db->get()->row(0, $this->name);
    }
    
    function create($object) {
        $this->db->insert($this->name, $object->getArrayForDatabaseInsert());
        return $this->db->insert_id();
    }
    
    function update($object) {
        $this->db->where('id', $object->getId())->update($this->name, $object->getArrayForDatabaseUpdate());
    }
    
    function delete($object) {
        $this->db->where('id', $object->getId())->delete($this->name);
    }
}

class entity {
    
    protected $id;
    
    function updateWithArray($array) {
        foreach ($array as $key => $value) {
            $method = 'set' . ucfirst($key);
            if (method_exists($this, $method)) {
                $this->$method($value);
            }
        }
    }
    
    function getId() {
        return $this->id;
    }
     
    function setId($value) {
        $this->id = $value;
    }
}