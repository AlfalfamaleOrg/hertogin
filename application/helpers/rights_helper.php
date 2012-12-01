<?php
function isAdmin() {
    $ci =& get_instance();
    $ci->load->library('rights_library');
    return $ci->rights_library->isAdmin();
}