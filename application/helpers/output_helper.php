<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

function outputJSON($array, $content_type_JSON = true) {
    $CI = get_instance();
    
    if ($content_type_JSON) $CI->output->set_content_type('application/json');
    $CI->output->set_output(json_encode($array));
}